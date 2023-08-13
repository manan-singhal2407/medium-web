import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState, useEffect } from 'react';
import TopNavBarEditor from '../components/TopAppBarEditor';
import { useNavigate, useParams } from 'react-router-dom';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const NewStory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [postId, setPostId] = useState(params.id);
    const [isEditingPost, setIsEditingPost] = useState(params.id !== undefined);

    const [published, setPublished] = useState(false);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [topic, setTopic] = useState('');
    const [data, setData] = useState('');
    const [lastEdited, setLastEdited] = useState(null);
    const [textShowingSavingHistory, setTextShowingSavingHistory] = useState('');

    const handleEditorChange = (e, editor) => {
        setData(editor.getData());
        setLastEdited(new Date());
    };

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setLastEdited(new Date());
            };
            reader.readAsDataURL(file);
        }
    };

    const sendDataToDatabase = async () => {
        setTextShowingSavingHistory('Saving...');
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isEditingPost) {
            const post = await postRepositoryImpl.updateUserPostWithId(postId, title, topic, file, data, published);
            if (post !== null) {
                setTextShowingSavingHistory('Saved');
            } else {
                setTextShowingSavingHistory('Failed');
            }
        } else {
            const post = await postRepositoryImpl.createNewPostForUser(title, topic, file, data, published);
            if (post !== null) {
                setPostId(post.post_id);
                setIsEditingPost(true);
                window.history.replaceState({}, '', `/p/${post.post_id}`);
                setTextShowingSavingHistory('Saved');
            } else {
                setTextShowingSavingHistory('Failed');
            }
        }
    };

    const handleOnPublish = async () => {
        setPublished(true);
        setTextShowingSavingHistory('Publishing...');
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isEditingPost) {
            const post = await postRepositoryImpl.updateUserPostWithId(postId, title, topic, file, data, true);
            if (post !== null) {
                setTextShowingSavingHistory('Published');
                navigate(`/post/${post.post_id}`);
            } else {
                setTextShowingSavingHistory('Failed');
            }
        } else {
            const post = await postRepositoryImpl.createNewPostForUser(title, topic, file, data, true);
            if (post !== null) {
                setTextShowingSavingHistory('Published');
                navigate(`/post/${post.post_id}`);
            } else {
                setTextShowingSavingHistory('Failed');
            }
        }
    };

    const getDataFromPostId = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getPostById(postId);
        setTitle(data.title);
        setTopic(data.topics);
        setData(data.text);
        // todo set published, image and file
    };

    useEffect(() => {
        if (isEditingPost) {
            getDataFromPostId();
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (lastEdited && new Date() - lastEdited >= 4000 && new Date() - lastEdited <= 8000) {
                sendDataToDatabase();
            }
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [lastEdited]);

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBarEditor textShowingSavingHistory={textShowingSavingHistory} showRevisionHistoryIcon={isEditingPost} postId={postId} onClickPublishButton={handleOnPublish} />
            <div style={{ width: '800px', height: '100%' }} className='mx-auto mt-4 pb-16'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); setLastEdited(new Date()); }}
                    placeholder="Title"
                    style={{ width: '800px' }}
                    className="outline-none bg-transparent border-none text-6xl mb-4"
                />
                <div className='flex my-4'>
                    <div
                        style={{ width: '320px', height: '180px' }}
                        className="bg-gray-300 relative cursor-pointer"
                        onClick={() => {
                            document.getElementById('imageInput').click();
                        }}
                    ><input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageSelect}
                            className="hidden"
                        />
                        {selectedImage !== '' ? (
                            <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                        ) : (
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                Click to select an image
                            </span>
                        )}
                    </div>
                    <div className='ml-8'>
                        <p className="text-black mb-1">Topics (Comma Sepearated)</p>
                        <input
                            type="text"
                            name="text"
                            value={topic}
                            style={{ width: '460px' }}
                            onChange={(e) => { setTopic(e.target.value); setLastEdited(new Date()); }}
                            className={'w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'}
                            placeholder="Android, Kotlin, Programming, React.js"
                        />
                    </div>
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data={data}
                    onChange={(e, editor) => { handleEditorChange(e, editor) }}
                />
            </div>
        </div>
    );
};

export default NewStory;