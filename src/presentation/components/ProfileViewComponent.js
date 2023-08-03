import React from 'react';

const ProfileViewComponent = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
                </div>
                <div className="flex flex-col ml-4 flex-1">
                    <h2 className="font-bold line-clamp-1">User Name</h2>
                    <p className="pr-4 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <button className="ml-auto mr-16 bg-green-500 text-white px-4 py-2 rounded mt-2">Follow</button>
            </div>
            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
        </div>
    );
};

export default ProfileViewComponent;
