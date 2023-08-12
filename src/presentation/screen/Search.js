import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useSearchParams } from 'react-router-dom';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';
import ProfileViewComponent from '../components/ProfileViewComponent';
import ListViewComponent from '../components/ListViewComponent';
import SearchRepositoryImpl from '../../data/repositories/SearchRepositoryImpl';
import { returnRandomList } from '../../data/dummy/DummyData';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = searchParams.get('q');

    const [activeTab, setActiveTab] = useState(1);

    const [posts, setPosts] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);
        const searchRepositoryImpl = new SearchRepositoryImpl();
        const postList = await searchRepositoryImpl.searchPostUsingKeyword(searchText);
        setPosts([...posts, ...postList]);

        const profileList = await searchRepositoryImpl.searchAuthorUsingKeyword(searchText);
        setProfiles([...profiles, ...profileList]);

        const topicsList = await searchRepositoryImpl.searchTopicsUsingKeyword(searchText);
        setTopics([...topics, ...topicsList]);

        setLoading(false);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight && activeTab === 1) {
    //             fetchPostData();
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [fetchPostData]);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar searchTextParam={searchText} fromDateParam={searchParams.get('fromDate')}
                toDateParam={searchParams.get('toDate')} likesParam={searchParams.get('likes')}
                commentsParam={searchParams.get('comments')} />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div style={{ width: '800px' }} className="mx-auto text-start">
                    {searchText !== '' && (
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-black mb-12 pl-4">Results for {searchText}</h1>
                            <div>
                                <div>
                                    <a href="#" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(1)}>Posts</a>
                                    <a href="#people" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(2)}>People</a>
                                    <a href="#topics" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(3)}>Topics</a>
                                    <a href="#lists" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 4 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(4)}>Lists</a>
                                </div>
                            </div>
                            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        posts.map((post, index) => <PostViewComponent post={post} key={index} />)
                    )}
                    {activeTab === 2 && (
                        profiles.map((profile, index) => (<ProfileViewComponent profile={profile} key={index} />))
                    )}
                    {activeTab === 3 && (
                        <TopicsViewComponent topicsList={topics} />
                    )}
                    {activeTab === 4 && (
                        returnRandomList(10).map((list, index) => (<ListViewComponent list={list} key={index} />))
                    )}
                </div>
                <div style={{ width: '400px' }} className="mx-auto text-start">
                    {searchText !== '' && posts.length !== 0 && (
                        <div className='ml-8'>
                            {activeTab !== 3 && (
                                <div className='mb-8'>
                                    <h1 className="text-xl font-bold text-black mb-4">Topics matching {searchText}</h1>
                                    <TopicsViewComponent topicsList={topics.slice(0, 6)} />
                                    <a href="#topics" className='mt-8 py-4 text-green-500 hover:text-black' onClick={() => setActiveTab(3)}>See all</a>
                                </div>
                            )}
                            {activeTab !== 2 && (
                                <div>
                                    <h1 className="text-xl font-bold text-black mb-4">People matching {searchText}</h1>
                                    {profiles.slice(0, 3).map((profile, index) => <ProfileViewComponent profile={profile} key={index} />)}
                                    <a href="#people" className='mt-8 py-4 text-green-500 hover:text-black' onClick={() => setActiveTab(2)}>See all</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;