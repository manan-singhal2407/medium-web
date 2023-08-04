import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';

const TopicsPostViewComponent = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        // todo replace with original profile id
        navigate(`/profile/${1}`);
    }

    const handlePostClick = () => {
        // todo replace with original post id
        navigate(`/post/${1}`);
    }

    const handleLikeClick = () => {
        // todo call API to set/remove from bookmark
    };

    const handleBookmarkClick = () => {
        // todo call API to set/remove from bookmark
    };

    return (
        <div className="flex flex-col flex-1 p-4 m-4">
            <div className="h-52 bg-gray-300 rounded-[1rem] cursor-pointer" onClick={handlePostClick}>
                <img className="w-full h-full object-cover rounded-full" src='post_url' alt='' />
            </div>
            <div className="flex items-center mt-4 cursor-pointer" onClick={handleUserClick}>
                <div className="w-6 h-6 bg-gray-300 rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                </div>
                <h2 className="line-clamp-1 ml-2 text-black">Nick Hilton</h2>
            </div>
            <h2 className="text-xl font-bold line-clamp-1 mt-2 cursor-pointer" onClick={handlePostClick}>Post Name</h2>
            <p className="mt-2 line-clamp-3 cursor-pointer" onClick={handlePostClick}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="mt-4 text-md text-green-500">5 min read · Nov 2, 2022</p>
            <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-4">
                    <img className='mr-0.5' src={ic_view} alt='' />
                    {14000}
                </div>
                <div className="flex items-center mr-6 curson-pointer">
                    <img className='cursor-pointer' src={false ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                    {1076}
                </div>
                <div className="flex items-center mr-6 text-black">
                    <img className='mr-0.5' src={ic_comment} alt='' />
                    {34}
                </div>
                <div className="ml-auto flex items-center mr-6">
                    <img className='cursor-pointer' src={true ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                </div>
            </div>
        </div>
    );
};

export default TopicsPostViewComponent;
