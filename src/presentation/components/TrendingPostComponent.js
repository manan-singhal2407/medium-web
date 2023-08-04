import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingPostComponent = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        // todo replace with original profile id
        navigate(`/profile/${1}`);
    }

    const handleTitleClick = () => {
        // todo replace with original post id
        navigate(`/post/${1}`);
    }

    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="flex flex-col flex-1 pr-4">
                    <div className="flex items-center mt-4 cursor-pointer" onClick={handleUserClick}>
                        <div className="w-8 h-8 bg-gray-300 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                        </div>
                        <h2 className="line-clamp-1 ml-4 text-black">Nick Hilton</h2>
                    </div>
                    <h2 className="text-xl font-bold line-clamp-3 cursor-pointer" onClick={handleTitleClick}>Ashes to ashes, dust to dust, Twitter to X</h2>
                    <p className="mt-2 text-xs text-gray-500">5 min read · Nov 2, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingPostComponent;
