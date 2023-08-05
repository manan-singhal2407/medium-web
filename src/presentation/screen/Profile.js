import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ProfileViewComponent from '../components/ProfileViewComponent';
import PostViewComponent from '../components/PostViewComponent';
import ProfileSideViewComponent from '../components/ProfileSideViewComponent';
import ListViewComponent from '../components/ListViewComponent';
import DraftViewComponent from '../components/DraftViewComponent';
import ProfileRepositoryImpl from '../../data/repositories/ProfileRepositoryImpl';
import { dummyPost } from '../../data/dummy/DummyData';

const Profile = () => {
    const params = useParams();
    const profileId = params.id;
    const [userId, setUserId] = useState('');
    const [profile, setProfile] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    const [activeTab, setActiveTab] = useState(1);

    const fetchProfileInfo = async () => {
        setTimeout(() => {
            const profileRepositoryImpl = new ProfileRepositoryImpl();
            const data = profileRepositoryImpl.getProfileById(profileId);
            setProfile(data[0]);
            // setUserPosts([...userPosts, ...data[1]]);
        }, Math.floor(Math.random() * 1500));
    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchProfileInfo();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            {profile !== null && (
                <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                    <div style={{ width: '800px' }} className="mx-auto text-start">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-black mb-12 pl-4">{profile.user_name}</h1>
                            <div>
                                <div>
                                    <a href="#" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(1)}>Posts({profile.post_count})</a>
                                    <a href="#following" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(2)}>Following({profile.following_count})</a>
                                    <a href="#followers" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(3)}>Followers({profile.followers_count})</a>
                                    <a href="#list" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 4 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(4)}>Lists({profile.lists_count + 1})</a>
                                    {userId === profileId && (
                                        <a href="#drafts" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 5 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(5)}>Drafts({profile.draft_count})</a>
                                    )}
                                </div>
                            </div>
                            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                            {activeTab === 1 && (
                                <PostViewComponent post={dummyPost[4]} />
                                // userPosts.map((post, index) => (<PostViewComponent post={post} key={index} />))
                            )}
                            {activeTab === 2 && (
                                [...Array(10)].map((_, index) => (<ProfileViewComponent key={index} />))
                            )}
                            {activeTab === 3 && (
                                [...Array(10)].map((_, index) => (<ProfileViewComponent key={index} />))
                            )}
                            {activeTab === 4 && (
                                <div>
                                    {userId === profileId && (
                                        <ListViewComponent user_name={profile.user_name} name='Reading List' key={0} />
                                    )}
                                    {[...Array(profile.lists_count)].map((_, index) => (<ListViewComponent user_name={profile.user_name} key={index} />))}
                                </div>
                            )}
                            {activeTab === 5 && (
                                [...Array(profile.drasft_count)].map((_, index) => (<DraftViewComponent key={index} />))
                            )}
                        </div>
                    </div>
                    <div className="border-l border-gray-150"></div>
                    <div style={{ width: '400px' }} className="mx-auto text-start">
                        <ProfileSideViewComponent profile={profile} sessionId={userId} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;