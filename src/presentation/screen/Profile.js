import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ProfileViewComponent from '../components/ProfileViewComponent';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';
import ProfileSideViewComponent from '../components/ProfileSideViewComponent';
import ListViewComponent from '../components/ListViewComponent';
import DraftViewComponent from '../components/DraftViewComponent';

const Profile = () => {
    const params = useParams();
    const [userId, setUserId] = useState('');
    const profileId = params.id;

    const [activeTab, setActiveTab] = useState(1);

    const fetchProfileInfo = async () => {

    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchProfileInfo();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div style={{ width: '800px' }} className="mx-auto text-start">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-black mb-12 pl-4">{profileId}</h1>
                        <div>
                            <div>
                                <a href="#" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(1)}>Posts(8)</a>
                                <a href="#following" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(2)}>Following(117)</a>
                                <a href="#followers" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(3)}>Followers(13)</a>
                                <a href="#list" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 4 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(4)}>Lists(1)</a>
                                {userId === profileId && (
                                    <a href="#drafts" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 5 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(5)}>Drafts(1)</a>
                                )}
                            </div>
                        </div>
                        <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                        {activeTab === 1 && (
                            <PostViewComponent />
                        )}
                        {activeTab === 2 && (
                            <ProfileViewComponent />
                        )}
                        {activeTab === 3 && (
                            <ProfileViewComponent />
                        )}
                        {activeTab === 4 && (
                            <ListViewComponent />
                        )}
                        {activeTab === 5 && (
                            <DraftViewComponent />
                        )}
                    </div>
                </div>
                <div className="border-l border-gray-150"></div>
                <div style={{ width: '400px' }} className="mx-auto text-start">
                    <ProfileSideViewComponent />
                </div>
            </div>
        </div>
    );
};

export default Profile;