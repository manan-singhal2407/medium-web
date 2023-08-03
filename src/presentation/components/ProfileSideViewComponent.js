import React from 'react';

const ProfileSideViewComponent = () => {
    return (
        <div className='flex flex-col ml-8'>
            <div className="w-28 h-28 bg-gray-300 rounded-full">
                <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
            </div>
            <h2 className="font-bold line-clamp-1 ml-4 mt-4 text-xl">User Name</h2>
            <p className="pr-4 ml-4 mt-2 mr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="mr-auto ml-4 mt-8 bg-green-500 text-white px-4 py-2 rounded mt-2">Follow | Edit Profile</button>
        </div>
    );
};

export default ProfileSideViewComponent;
