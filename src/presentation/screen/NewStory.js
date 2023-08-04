import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState, useEffect } from 'react';
import TopNavBarEditor from '../components/TopAppBarEditor';
import { useParams } from 'react-router-dom';

const NewStory = () => {
    const params = useParams();
    const postId = params.postId;
    const isEditingPost = postId !== undefined && postId !== null && postId !== '';

    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
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
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const sendDataToDatabase = () => {
        console.log('API Called');

        // todo on success
        if (isEditingPost) {
            window.history.replaceState({}, '', `/p/${postId}`);
            setTextShowingSavingHistory('Saving...');
        }
    };

    const handleOnPublish = () => {
        // call API
    };

    useEffect(() => {
        if (isEditingPost) {
            // call API to fetch info
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
                        {selectedImage ? (
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