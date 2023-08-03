import React from 'react';

const PostViewComponent = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="flex flex-col flex-1 pr-4">
                    <h2 className="text-xl font-bold line-clamp-1">Post Name</h2>
                    <p className="mt-2 line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="mt-4 text-md text-green-500">5 min read · Nov 2, 2022</p>
                </div>
                <div className="ml-auto w-48 h-48 mr-16 bg-gray-300 rounded-[2rem]">
                    <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
                </div>
            </div>
            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
        </div>
    );
};

export default PostViewComponent;
