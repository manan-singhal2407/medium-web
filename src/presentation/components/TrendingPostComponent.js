import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingPostComponent = ({ post }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${post.user_id}`);
    }

    const handleTitleClick = () => {
        navigate(`/post/${post.post_id}`);
    }

    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="flex flex-col flex-1 pr-4">
                    <div className="flex items-center mt-4 cursor-pointer" onClick={handleUserClick}>
                        <div className="w-8 h-8 bg-gray-300 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src={post.user_image} alt='' />
                        </div>
                        <h2 className="line-clamp-1 ml-4 text-black">{post.user_name}</h2>
                    </div>
                    <h2 className="text-xl font-bold line-clamp-3 cursor-pointer" onClick={handleTitleClick}>{post.title}</h2>
                    <p className="mt-2 text-xs text-gray-500">{post.time_read} · {post.last_updated_at.substring(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingPostComponent;
