import React from 'react';
import { PrimaryButton, SecondaryButton } from './atom/AppButton';

const ProfileSideViewComponent = ({ profile, sessionId }) => {

    const handleFollowClick = () => {
        alert('Call API');
    };

    return (
        <div className='flex flex-col ml-8'>
            <div className="w-28 h-28 bg-gray-300 rounded-full">
                <img className="w-full h-full object-cover rounded-full" src={profile.user_image} alt='' />
            </div>
            <h2 className="font-bold line-clamp-1 ml-4 mt-4 text-xl">{profile.user_name}</h2>
            <p className="pr-4 ml-4 mt-2 mb-4 mr-12">{profile.bio}</p>
            {profile.user_id === sessionId && (
                <PrimaryButton text='Edit Profile' onClickHandle={handleFollowClick} />
            )}
            {profile.user_id !== sessionId && !profile.is_user_following && (
                <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
            )}
            {profile.user_id !== sessionId && profile.is_user_following && (
                <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
            )}
        </div>
    );
};

export default ProfileSideViewComponent;
