import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ic_private from '../../assets/images/ic_private.svg';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';
import ListRepositoryImpl from '../../data/repositories/ListRepositoryImpl';

const Lists = () => {
    const params = useParams();
    const listId = params.id;

    const [listName, setListName] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);
        if (listId === '-1') {
            const postRepositoryImpl = new PostRepositoryImpl();
            const data = await postRepositoryImpl.getAllPostFromBookmark();
            setPosts([...posts, ...data]);
            setListName('Reading List');
        } else {
            const listRepositoryImpl = new ListRepositoryImpl();
            const data = await listRepositoryImpl.getPostsOfList(listId);
            setPosts([...posts, ...data.posts]);
            setListName(data.name);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div>
                    <h2 className="text-4xl font-bold mb-2 line-clamp-1 mr-4 ml-4 mt-2">{listName}</h2>
                    <div className="flex items-center ml-4 mb-8">
                        <h2 className="text-xl line-clamp-1 mr-4">{posts.length} posts</h2>
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