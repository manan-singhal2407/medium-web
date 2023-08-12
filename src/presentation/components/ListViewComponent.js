import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic_private from '../../assets/images/ic_private.svg';

const ListViewComponent = ({ list }) => {
    const navigate = useNavigate();

    const handleListClick = () => {
        navigate(`/list/${list.id}`);
    }

    return (
        <div className="flex items-center ml-4 mr-16 mt-8 mb-12 bg-gray-300 cursor-pointer" onClick={handleListClick}>
            <div className="flex flex-col flex-1 pr-4">
                <div className="flex items-center ml-8 mt-8">
                    <div className="w-6 h-6 bg-gray-400 rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                    </div>
                    <h2 className="line-clamp-1 ml-2 text-black">{list.user_name}</h2>
                </div>
                <h2 className="text-xl font-bold line-clamp-1 mr-4 ml-8 mt-2">{list.name}</h2>
                <div className="flex items-center ml-8 mb-8">
                    <h2 className="text-md line-clamp-1 mr-4">{list.posts_count} posts</h2>
                    {list.is_private && (
                        <img src={ic_private} alt='' />
                    )}
                </div>
            </div>
            <div className="ml-auto w-40 h-40 bg-gray-400 rounded-[0.25rem]">
                <img className="w-full h-full object-cover" src={list.img1} alt='' />
            </div>
            <div className="border-l border-white"></div>
            <div className="ml-auto w-20 h-40 bg-gray-400 rounded-[0.25rem]">
                <img className="w-full h-full object-cover" src={list.img2} alt='' />
            </div>
            <div className="ml-auto w-10 h-40 bg-gray-400 rounded-[0.25rem]">
                <img className="w-full h-full object-cover" src={list.img3} alt='' />
            </div>
        </div>
    );
};

export default ListViewComponent;