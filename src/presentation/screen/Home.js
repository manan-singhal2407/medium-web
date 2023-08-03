import React, { useEffect, useState, useRef } from 'react';
import HomeRepositoryImpl from '../../data/repositories/HomeRepositoryImpl';
import { useNavigate } from "react-router-dom";
import TopNavBar from '../components/TopAppBar';
import TrendingPostComponent from '../components/TrendingPostComponent';
import PostViewComponent from '../components/PostViewComponent';
import TopicsViewComponent from '../components/TopicsViewComponent';

const Home = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [homeEntity, setHomeEntity] = useState(null);
    const [count, setCount] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef();

    const fetchMoreData = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            setCount(count+10);
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
        setIsLoading(false);
    };

    const fetchHomePageData = async () => {
        const homeRepository = new HomeRepositoryImpl();
        setHomeEntity(await homeRepository.fetchHomePageInfoForUser(userId));
    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchHomePageData();
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.intersectionRatio >= 0.5) {
            fetchMoreData();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, [bottomRef]);

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBar />
            <div className="flex flex-col items-center mt-8">
                <p className="text-2xl font-bold text-black">Trending Posts</p>
                <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                    <TrendingPostComponent />
                    <TrendingPostComponent />
                    <TrendingPostComponent />
                    <TrendingPostComponent />
                    <TrendingPostComponent />
                    <TrendingPostComponent />
                </div>
                <div className="ml-4 mr-12 my-4 border-t border-gray-100 w-screen mt-8"></div>
                <div style={{ width: '1200px' }} className="mx-auto text-start p-4 flex">
                    <div style={{ width: '800px' }} className="mx-auto text-start">
                        {[...Array(count)].map((_, index) => <PostViewComponent key={index} />)}
                        <div ref={bottomRef} style={{ height: '10px' }}></div>
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