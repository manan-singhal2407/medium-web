import React, { useEffect, useState } from 'react';
import HomeRepositoryImpl from '../../data/repositories/HomeRepositoryImpl';
import TopNavBar from '../components/TopAppBar';
import TrendingPostComponent from '../components/TrendingPostComponent';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const Home = () => {
    const [trendingPost, setTrendingPost] = useState([]);
    const [recommendedPost, setRecommendedPost] = useState([]);
    const [topics, setTopics] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchMorePostData = async () => {
        if (isLoading) return;

        setLoading(true);
        setTimeout(() => {
            const homeRepository = new HomeRepositoryImpl();
            const data = homeRepository.fetchMoreRecommendedPostForUser();
            setRecommendedPost([...recommendedPost, ...data]);
            setLoading(false);
        }, Math.floor(Math.random() * 1500) + 500);
    };

    const fetchHomePageData = () => {
        console.log("called");
        const postRepository = new PostRepositoryImpl();
        postRepository.getTopPostsForUser();

        const homeRepository = new HomeRepositoryImpl();
        let data = homeRepository.fetchHomePageInfoForUser();
        setTrendingPost([...trendingPost, ...data[0]]);
        setRecommendedPost([...recommendedPost, ...data[1]]);
        setTopics([...topics, ...data[2]]);
    };

    useEffect(() => {
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
                    {trendingPost.map((post, index) => <TrendingPostComponent post={post} key={index} />)}
                </div>
                <div className="ml-4 mr-12 my-4 border-t border-gray-100 w-screen mt-8"></div>
                <div style={{ width: '1200px' }} className="mx-auto text-start p-4 flex">
                    <div style={{ width: '800px' }} className="mx-auto text-start">
                        {recommendedPost.map((post, index) => <PostViewComponent post={post} key={index} />)}
                        <div style={{ height: '10px' }}></div>
                    </div>
                    <div style={{ width: '400px' }} className="mx-auto text-start">
                        <TopicsViewComponent topicsList={topics} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;