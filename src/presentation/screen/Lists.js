import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ic_private from '../../assets/images/ic_private.svg';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';

const Lists = () => {
    const params = useParams();
    const listId = params.id;

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
        }, Math.floor(Math.random() * 1500));
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div>
                    <h2 className="text-4xl font-bold mb-2 line-clamp-1 mr-4 ml-4 mt-2">List Name</h2>
                    <div className="flex items-center ml-4 mb-8">
                        <h2 className="text-xl line-clamp-1 mr-4">6 posts</h2>
                        {true && (
                            <img src={ic_private} alt='' />
                        )}
                    </div>
                    <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                    <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                        {posts.map((post, index) => <TopicsPostViewComponent post={post} key={index} />)}
                    </div>

                </div></div>
        </div >
    );
};

export default Lists;