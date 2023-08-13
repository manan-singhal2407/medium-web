import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import ic_close from '../../assets/images/ic_close.svg';
import ListRepositoryImpl from '../../data/repositories/ListRepositoryImpl';

const TopicsPostViewComponent = ({ post }) => {
    const navigate = useNavigate();
    const [isUserLiked, setIsUserLiked] = useState(post.is_user_liked);
    const [likesCount, setLikesCount] = useState(post.likes_count);
    const [isUserBookmark, setIsUserBookmark] = useState(post.is_user_bookmark);
    const [isBookmarkModalOpen, setIsBookmarkModalOpen] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [newListName, setNewListName] = useState('');

    const handleUserClick = () => {
        navigate(`/profile/${post.user_id}`);
    }

    const handlePostClick = () => {
        navigate(`/post/${post.post_id}`);
    }

    const handleLikeClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isUserLiked) {
            const success = await postRepositoryImpl.dislikePostById(post.post_id);
            if (success) {
                setIsUserLiked(false);
                setLikesCount(likesCount-1);
            }
        } else {
            const success = await postRepositoryImpl.likePostById(post.post_id);
            if (success) {
                setIsUserLiked(true);
                setLikesCount(likesCount+1);
            }
        }
    };

    const handleBookmarkIconClick = async () => {
        setIsBookmarkModalOpen(true);
    };

    const handleBookmarkClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isUserBookmark) {
            alert('No such API');
        } else {
            const success = await postRepositoryImpl.addPostToBoookmarkById(post.post_id);
            if (success) {
                setIsUserBookmark(true);
            }
        }
    };

    const fetchUserLists = async () => {
        const listRepositoryImpl = new ListRepositoryImpl();
        const data = await listRepositoryImpl.getAllLists();
        setUserLists(data);
    };

    const addUserLists = async () => {
        if (newListName !== '') {
            const listRepositoryImpl = new ListRepositoryImpl();
            const success = await listRepositoryImpl.createListWithName(newListName);
            if (success) {
                setNewListName('');
                await fetchUserLists();
            } else {
                alert('Failed to create list');
            }
        }
    };

    const handleCheckboxChange = async (index, checked) => {
        const listRepositoryImpl = new ListRepositoryImpl();
        if (checked) {
            await listRepositoryImpl.addPostToList(userLists[index].id, post.post_id);
        } else {
            await listRepositoryImpl.deletePostFromList(userLists[index].id, post.post_id);
        }
    };

    useEffect(() => {
        fetchUserLists();
    }, []);

    return (
        <div className="flex flex-col flex-1 p-4 m-4">
            <div className="h-52 bg-gray-300 rounded-[1rem] cursor-pointer" onClick={handlePostClick}>
                <img className="w-full h-full object-cover rounded-full" src={post.image} alt='' />
            </div>
            <div className="flex items-center mt-4 cursor-pointer" onClick={handleUserClick}>
                <div className="w-6 h-6 bg-gray-300 rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src={post.user_image} alt='' />
                </div>
                <h2 className="line-clamp-1 ml-2 text-black">{post.user_name}</h2>
            </div>
            <h2 className="text-xl font-bold line-clamp-1 mt-2 cursor-pointer" onClick={handlePostClick}>{post.title}</h2>
            <p className="mt-2 line-clamp-3 cursor-pointer" onClick={handlePostClick}>{post.text}</p>
            <p className="mt-4 text-md text-green-500">{post.time_read} · {post.created_at.substring(0, 10)}</p>
            <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-4">
                    <img className='mr-0.5' src={ic_view} alt='' />
                    {post.views_count}
                </div>
                <div className="flex items-center mr-6 curson-pointer">
                    <img className='cursor-pointer' src={isUserLiked ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                    {likesCount}
                </div>
                <div className="flex items-center mr-6 text-black">
                    <img className='mr-0.5' src={ic_comment} alt='' />
                    {post.comments_count}
                </div>
                <div className="ml-auto flex items-center mr-6">
                    <img className='cursor-pointer' src={isUserBookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkIconClick} />
                </div>
            </div>
            {isBookmarkModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-blue-100 px-8 py-4 rounded-md shadow-md">
                        <div className='flex'>
                            <label className='text-2lg font-bold text-black mr-64'>Add to list</label>
                            <img className='ml-auto mb-4 cursor-pointer' src={ic_close} alt='' onClick={() => setIsBookmarkModalOpen(false)} />
                        </div>
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={isUserBookmark}
                                onChange={handleBookmarkClick}
                                className="mr-2"
                            />
                            <label className="text-black">Reading List</label>
                        </div>
                        {userLists.map((list, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id={`list-${index}`}
                                    onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor={`list-${index}`} className="text-black">{list.name}</label>
                            </div>
                        ))}
                        <div>
                            <p className="text-2lg font-bold text-black mr-64 mt-12">Create new list:</p>
                            <input
                                type="text"
                                name="text"
                                value={newListName}
                                onChange={(e) => { setNewListName(e.target.value) }}
                                className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                                placeholder="List name..."
                            />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={addUserLists}
                                className="mx-4 bg-green-500 hover:bg-green-600 focus:outline-none text-white px-4 py-1.5 rounded-[2rem] border-none"
                            >Add List</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopicsPostViewComponent;
