import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';
import ic_edit from '../../assets/images/ic_edit.svg';
import ic_delete from '../../assets/images/ic_delete.svg';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const PostViewComponent = ({ post }) => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isUserLiked, setIsUserLiked] = useState(post.is_user_liked);
    const [likesCount, setLikesCount] = useState(post.likes_count);
    const [isUserBookmark, setIsUserBookmark] = useState(post.is_user_bookmark);

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

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
    }, []);

    if (isDeleted) {
        return (<div></div>);
    }
    return (
        <div className="flex items-center ml-4 mt-4 mb-16">
            <div className="flex flex-col flex-1 pr-4">
                {post.user_id !== userId && (
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
                        <img className='cursor-pointer' src={isUserBookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                        {post.user_id.toString() === userId && (
                            <img className='mx-2 cursor-pointer' onClick={handleEditClick} src={ic_edit} alt='' />
                        )}
                        {post.user_id.toString() === userId && (
                            <img className='cursor-pointer' onClick={handleDeleteClick} src={ic_delete} alt='' />
                        )}
                    </div>
                </div>
            </div>
            <div className="ml-auto w-56 h-44 mr-16 bg-gray-300 rounded-[1rem]">
                <img className="w-full h-full object-cover rounded-full cursor-pointer" onClick={handlePostClick} src={post.image} alt='' />
            </div>
        </div>
    );
};

export default PostViewComponent;
