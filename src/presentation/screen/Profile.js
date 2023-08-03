import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ProfileViewComponent from '../components/ProfileViewComponent';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';
import ProfileSideViewComponent from '../components/ProfileSideViewComponent';

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
                                <a href="#" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(1)}>Posts(12)</a>
                                <a href="#following" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(2)}>Following(10,000)</a>
                                <a href="#followers" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(3)}>Followers(19,453)</a>
                            </div>
                        </div>
                        <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                        <PostViewComponent />
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