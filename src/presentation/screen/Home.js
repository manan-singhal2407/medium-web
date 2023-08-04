import React, { useEffect, useState, useRef } from 'react';
import HomeRepositoryImpl from '../../data/repositories/HomeRepositoryImpl';
import TopNavBar from '../components/TopAppBar';
import TrendingPostComponent from '../components/TrendingPostComponent';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';

const Home = () => {
    const [userId, setUserId] = useState('');
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMorePostData = async () => {
        if (isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            try {
                const newData = ['More data', 'More data', 'More data', 'More data', 'More data', 'More data'];
                const newPosts = [...posts, ...newData];
                console.log(newPosts.length);
                setPosts(newPosts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        }, 2000);
    };

    const fetchHomePageData = async () => {
        const homeRepository = new HomeRepositoryImpl();
        const data = await homeRepository.fetchHomePageInfoForUser(userId);
    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchHomePageData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
                fetchMorePostData();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [fetchMorePostData]);

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBar />
            <div className="flex flex-col items-center mt-8">
                <p className="text-2xl font-bold text-black">Trending Posts</p>
                <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => <TrendingPostComponent key={index} />)}
                </div>
                <div className="ml-4 mr-12 my-4 border-t border-gray-100 w-screen mt-8"></div>
                <div style={{ width: '1200px' }} className="mx-auto text-start p-4 flex">
                    <div style={{ width: '800px' }} className="mx-auto text-start">
                        {posts.map((_, index) => <PostViewComponent key={index} />)}
                        <div style={{ height: '10px' }}></div>
                    </div>
                    <div style={{ width: '400px' }} className="mx-auto text-start">
                        <TopicsViewComponent topicsList={['Programming', 'Machine Learning', 'Technology', 'Writing', 'Politics', 'Data Science', 'Productivity', 'Self Improvement']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;