import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import TopNavBarEditor from '../components/TopAppBarEditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PrimaryButton } from '../components/atom/AppButton';

const VersionHistory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const postId = params.id;

    const [activeTab, setActiveTab] = useState(1);

    const [versionList, setVersionList] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const fetchAllVersion = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getAllVersionOfAPost(postId);
        await handleVersionChangeClick(0);
        setVersionList(data);
    };

    const handleVersionChangeClick = async (index) => {
        setActiveTab(index + 1);
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getSpecificVersion(postId, index + 1);
        setTitle(data.title);
        setContent(data.content);
        setImage(data.image);
    };

    const handleButtonClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const success = await postRepositoryImpl.updateUserPostWithId(postId, title, '', image, content, false);
        if (success) {
            navigate(`/p/${postId}`);
        }
    };

    useEffect(() => {
        fetchAllVersion();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBarEditor />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div style={{ width: '400px' }} className="mx-auto text-start">
                    {versionList.length !== 0 && <div className='ml-8'>
                        <div className='mb-8'>
                            <h1 className="text-xl font-bold text-black mb-4">Previous History</h1>
                            {versionList.map((versionAllEntity, index) => (
                                <div key={index} onClick={() => handleVersionChangeClick(index)} className={`cursor-pointer flex items-center py-8 flex-col ${activeTab === (index + 1) ? 'bg-gray-200' : 'bg-white-200'}`}>
                                    <label className="cursor-pointer text-black font-bold mb-1">{versionAllEntity.title}</label>
                                    <label className="cursor-pointer text-black">Autosaved at {versionAllEntity.created_at.slice(11, 16)} on {versionAllEntity.created_at.slice(0, 10)}</label>
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
                <div style={{ width: '800px', height: '100%' }} className='mx-auto mt-4 pb-16 px-8'>
                    <input
                        type="text"
                        value={title}
                        placeholder="Title"
                        style={{ width: '800px' }}
                        className="outline-none bg-transparent border-none text-6xl mb-4"
                        disabled={true}
                    />
                    <div className='flex my-4'>
                        <div
                            style={{ width: '320px', height: '180px' }}
                            className="bg-gray-300 relative"
                        ><img src={image} alt="Selected" className="w-full h-full object-cover" />
                        </div>
                        <div className='ml-8'>
                            <p className="text-black mb-1">Topics (Comma Sepearated)</p>
                            <input
                                type="text"
                                disabled={true}
                                name="text"
                                value='Not Getting From the backend'
                                style={{ width: '460px' }}
                                className={'w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'}
                                placeholder="Android, Kotlin, Programming, React.js"
                            />
                        </div>
                    </div>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        disabled={true}
                    />
                    <div className='mt-8'></div>
                    <PrimaryButton text='Get this version' onClickHandle={handleButtonClick}/>
                </div>
            </div>
        </div>
    );
};

export default VersionHistory;