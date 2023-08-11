import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState, useEffect } from 'react';
import TopNavBarEditor from '../components/TopAppBarEditor';
import { useParams } from 'react-router-dom';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import Toast from '../components/atom/Toast';

const NewStory = () => {
    const params = useParams();
    let postId = params.id;
    let isEditingPost = postId !== undefined;

    const [toast, setToast] = useState('');
    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [topic, setTopic] = useState('');
    const [data, setData] = useState('');
    const [lastEdited, setLastEdited] = useState(null);
    const [textShowingSavingHistory, setTextShowingSavingHistory] = useState('');

    console.log(localStorage.getItem('user_token'));

    const handleEditorChange = (e, editor) => {
        setData(editor.getData());
        setLastEdited(new Date());
    };

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const sendDataToDatabase = () => {
        // alert('call API');
        // todo on success
        // if (!isEditingPost) {
        //     postId = 100;
        //     isEditingPost = true;
        // }
        // if (isEditingPost) {
        //     window.history.replaceState({}, '', `/p/${postId}`);
        //     setTextShowingSavingHistory('Saved');
        // }
    };

    const handleOnPublish = async () => {
        setTextShowingSavingHistory('Publishing...');
        const postRepositoryImpl = new PostRepositoryImpl();
        const post_id = await postRepositoryImpl.publishPostToDatabase(title, topic, selectedImage, data);
        if (post_id !== -1) {
            postId = post_id;
            isEditingPost = true;
            window.history.replaceState({}, '', `/p/${postId}`);
            setTextShowingSavingHistory('Published');
            setToast("Post published");
        } else {
            setTextShowingSavingHistory('Failed');
            setToast("Something went wrong");
        }
        setTimeout(() => {
            setToast('');
        }, 4000);
    };

    useEffect(() => {
        if (isEditingPost) {
            const postRepositoryImpl = new PostRepositoryImpl();
            const data = postRepositoryImpl.getPostById(postId);
            setTitle(data[0].title);
            setTopic(data[0].topics);
            setData(data[0].text);
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
            {toast !== '' && (
                <Toast message="Something went wrong" />
            )}
            <TopNavBarEditor textShowingSavingHistory={textShowingSavingHistory} showRevisionHistoryIcon={isEditingPost} onClickPublishButton={handleOnPublish} />
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