import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ProfileViewComponent from '../components/ProfileViewComponent';
import PostViewComponent from '../components/PostViewComponent';
import ProfileSideViewComponent from '../components/ProfileSideViewComponent';
import ListViewComponent from '../components/ListViewComponent';
import DraftViewComponent from '../components/DraftViewComponent';
import ProfileRepositoryImpl from '../../data/repositories/ProfileRepositoryImpl';
import { dummyProfile } from '../../data/dummy/DummyData';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import ListRepositoryImpl from '../../data/repositories/ListRepositoryImpl';

const Profile = () => {
    const params = useParams();
    const profileId = params.id;
    const [profile, setProfile] = useState(null);
    const [bookmarkList, setBookmarkList] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [userLists, setUserLists] = useState([]);
    const [userDrafts, setUserDrafts] = useState([]);

    const [activeTab, setActiveTab] = useState(1);

    const fetchProfileInfo = async () => {
        const profileRepositoryImpl = new ProfileRepositoryImpl();
        const data = await profileRepositoryImpl.getProfileInfoById(profileId);
        if (data[0]) {
            setProfile(data[1]);
        }
    };

    const fetchUserPosts = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getCurrentUserPosts();
        const bookmark = await postRepositoryImpl.getBoookmarkInfoAsList();
        setBookmarkList(bookmark);
        setUserPosts([...userPosts, ...data]);
    };

    const fetchUserLists = async () => {
        const listRepositoryImpl = new ListRepositoryImpl();
        const data = await listRepositoryImpl.getAllLists();
        setUserLists([...userLists, ...data]);
    };

    const fetchUserDrafts = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getAllDrafts();
        setUserDrafts([...userDrafts, ...data]);
    };

    useEffect(() => {
        fetchProfileInfo();
        // todo remove this if condition
        if (localStorage.getItem('user_id') === profileId) {
            fetchUserPosts();
            fetchUserLists();
            fetchUserDrafts();
        }
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
                                    <a href="#list" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 4 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(4)}>Lists({profile.lists_count + (localStorage.getItem('user_id') === profileId ? 1 : 0)})</a>
                                    {localStorage.getItem('user_id') === profileId && (
                                        <a href="#drafts" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 5 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(5)}>Drafts({profile.draft_count})</a>
                                    )}
                                </div>
                            </div>
                            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                            {activeTab === 1 && (
                                userPosts.map((post, index) => (<PostViewComponent post={post} key={index} />))
                            )}
                            {activeTab === 2 && (
                                [...Array(10)].map((_, index) => (<ProfileViewComponent profile={dummyProfile[index]} key={index} />))
                            )}
                            {activeTab === 3 && (
                                [...Array(10)].map((_, index) => (<ProfileViewComponent profile={dummyProfile[index]} key={index} />))
                            )}
                            {activeTab === 4 && (
                                <div>
                                    {localStorage.getItem('user_id') === profileId && (
                                        <ListViewComponent list={bookmarkList} key={0} />
                                    )}
                                    {userLists.map((list, index) => (<ListViewComponent list={list} key={index} />))}
                                </div>
                            )}
                            {activeTab === 5 && (
                                userDrafts.map((draft, index) => (<DraftViewComponent draft={draft} key={index} />))
                            )}
                        </div>
                    </div>
                    <div className="border-l border-gray-150"></div>
                    <div style={{ width: '400px' }} className="mx-auto text-start">
                        <ProfileSideViewComponent profile={profile} handleDataChange={fetchProfileInfo} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;