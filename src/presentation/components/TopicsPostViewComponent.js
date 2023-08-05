import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';

const TopicsPostViewComponent = ({ post }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${post.user_id}`);
    }

    const handlePostClick = () => {
        navigate(`/post/${post.post_id}`);
    }

    const handleLikeClick = () => {
        alert('Call API');
    };

    const handleBookmarkClick = () => {
        alert('Call API');
    };

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
            <p className="mt-4 text-md text-green-500">{post.time_read} · {post.last_updated_at.substring(0, 10)}</p>
            <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-4">
                    <img className='mr-0.5' src={ic_view} alt='' />
                    {post.views_count}
                </div>
                <div className="flex items-center mr-6 curson-pointer">
                    <img className='cursor-pointer' src={post.is_user_liked ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                    {post.likes_count}
                </div>
                <div className="flex items-center mr-6 text-black">
                    <img className='mr-0.5' src={ic_comment} alt='' />
                    {post.comments_count}
                </div>
                <div className="ml-auto flex items-center mr-6">
                    <img className='cursor-pointer' src={post.is_user_bookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                </div>
            </div>
        </div>
    );
};

export default TopicsPostViewComponent;
