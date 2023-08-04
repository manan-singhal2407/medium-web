import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TopNavBar from '../components/TopAppBar';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';

const Topics = () => {
    const params = useParams();
    const topicName = params.name;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPostData = () => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            try {
                const newData = ['More data', 'More data', 'More data', 'More data', 'More data', 'More data'];
                const newPosts = [...posts, ...newData];
                console.log(newPosts.length);
                setPosts(newPosts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
                console.log("Bottom");
                fetchPostData();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [fetchPostData]);

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBar />
            <div className="flex flex-col items-center mt-8">
                <p className="text-4xl font-bold text-black">{topicName}</p>
                <p className="text-md mt-4 font-bold text-gray-500">Topic  ·  2.14M Posts</p>
                <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                    {posts.map((_, index) => <TopicsPostViewComponent key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default Topics;