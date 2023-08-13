import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';
import ic_edit from '../../assets/images/ic_edit.svg';
import ic_close from '../../assets/images/ic_close.svg';
import ic_delete from '../../assets/images/ic_delete.svg';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';
import ListRepositoryImpl from '../../data/repositories/ListRepositoryImpl';

const PostViewComponent = ({ post }) => {
    const navigate = useNavigate();
    const [isDeleted, setIsDeleted] = useState(false);
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
                setLikesCount(likesCount - 1);
            }
        } else {
            const success = await postRepositoryImpl.likePostById(post.post_id);
            if (success) {
                setIsUserLiked(true);
                setLikesCount(likesCount + 1);
            }
        }
    };

    const handleBookmarkIconClick = () => {
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

    const handleEditClick = () => {
        navigate(`/p/${post.post_id}`);
    };

    const handleDeleteClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const success = await postRepositoryImpl.deletePostById(post.post_id);
        if (success) {
            setIsDeleted(true);
        }
    };

    const fetchUserLists = async () => {
        const listRepositoryImpl = new ListRepositoryImpl();
        const data = await listRepositoryImpl.getAllLists();
        setUserLists(data);
    };

    const addUserLists = async () => {
        const listRepositoryImpl = new ListRepositoryImpl();
        const success = await listRepositoryImpl.createListWithName(newListName);
        if (success) {
            setNewListName('');
            await fetchUserLists();
        } else {
            alert('Failed to create list');
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

    if (isDeleted) {
        return (<div></div>);
    }
    return (
        <div className="flex items-center ml-4 mt-4 mb-16">
            <div className="flex flex-col flex-1 pr-4">
                {post.user_id !== localStorage.getItem('user_id') && (
                    <div className="flex items-center cursor-pointer" onClick={handleUserClick}>
                        <div className="w-6 h-6 bg-gray-300 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src={post.user_image} alt='' />
                        </div>
                        <h2 className="line-clamp-1 ml-2 text-black">{post.user_name}</h2>
                    </div>
                )}
                <h2 className="text-xl font-bold line-clamp-1 mt-2 cursor-pointer" onClick={handlePostClick}>{post.title}</h2>
                <p className="mt-2 line-clamp-3 cursor-pointer" onClick={handlePostClick}>{post.text}</p>
                <p className="mt-4 text-md text-green-500">{post.time_read} · {post.created_at.substring(0, 10)}</p>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center mr-4">
                        <img className='mr-0.5' src={ic_view} alt='' />
                        {post.views_count}
                    </div>
                    <div className="flex items-center mr-6 cursor-pointer">
                        <img className='cursor-pointer' src={isUserLiked ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                        {likesCount}
                    </div>
                    <div className="flex items-center mr-6 text-black">
                        <img className='mr-0.5' src={ic_comment} alt='' />
                        {post.comments_count}
                    </div>
                    <div className="ml-auto flex items-center mr-6">
                        {/* <img className='cursor-pointer' src={isUserBookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkIconClick} /> */}
                        {post.user_id.toString() === localStorage.getItem('user_id') && (
                            <img className='mx-2 cursor-pointer' onClick={handleEditClick} src={ic_edit} alt='' />
                        )}
                        {post.user_id.toString() === localStorage.getItem('user_id') && (
                            <img className='cursor-pointer' onClick={handleDeleteClick} src={ic_delete} alt='' />
                        )}
                    </div>
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
            <div className="ml-auto w-56 h-44 mr-16 bg-gray-300 rounded-[1rem]">
                <img className="w-full h-full object-cover rounded-full cursor-pointer" onClick={handlePostClick} src={post.image} alt='' />
            </div>
        </div>
    );
};

export default PostViewComponent;
