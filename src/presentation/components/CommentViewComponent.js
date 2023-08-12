import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';

const CommentViewComponent = ({ comment, showReply, handleReplyClick }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${comment.user_id}`);
    }

    const handleCommentLikeClick = () => {
        alert('Call API');
    };

    return (
        <div className='flex flex-col my-8'>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full cursor-pointer" onClick={handleUserClick}>
                    <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                </div>
                <div className="flex flex-col ml-4 flex-1">
                    <h2 className="text-md font-bold line-clamp-1 cursor-pointer" onClick={handleUserClick}>{comment.user_name}</h2>
                    <p className="pr-4 line-clamp-1">Posted at {comment.created_at.slice(11, 16)} on {comment.created_at.slice(0, 10)}</p>
                </div>
            </div>
            <p className="mr-16 mt-4">{comment.message}</p>
            <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-6 cursor-pointer">
                    <img className='cursor-pointer' src={false ? ic_liked : ic_like} alt='' onClick={handleCommentLikeClick} />
                    {1076}
                </div>
                {showReply && (
                    <div className="flex items-center mr-6 text-black cursor-pointer font-bold" onClick={handleReplyClick}>
                        Reply
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentViewComponent;
