import React from 'react';
import { PrimaryButton, SecondaryButton } from './atom/AppButton';

const ProfileSideViewComponent = () => {

    const handleFollowClick = () => {
        // todo call API to set/remove from follow
    };

    return (
        <div className='flex flex-col ml-8'>
            <div className="w-28 h-28 bg-gray-300 rounded-full">
                <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
            </div>
            <h2 className="font-bold line-clamp-1 ml-4 mt-4 text-xl">User Name</h2>
            <p className="pr-4 ml-4 mt-2 mb-4 mr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {true && (
                // todo true if userId === profileId
                <PrimaryButton text='Edit Profile' onClickHandle={handleFollowClick} />
            )}
            {true && true && (
                // todo 1st true if userId !== profileId
                <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
            )}
            {true && false && (
                <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
            )}
        </div>
    );
};

export default ProfileSideViewComponent;
