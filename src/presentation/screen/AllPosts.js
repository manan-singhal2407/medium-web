import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopAppBar';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            const postRepositoryImpl = new PostRepositoryImpl();
            const data = postRepositoryImpl.getAllPosts();
            setPosts([...posts, ...data]);
            setLoading(false);
        }, Math.floor(Math.random() * 1500) + 500);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
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
                <p className="text-4xl font-bold text-black">All Posts</p>
                <p className="text-md mt-4 font-bold text-gray-500">Today  ·  2.14K Posts</p>
                <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                    {posts.map((post, index) => <TopicsPostViewComponent post={post} key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default AllPosts;