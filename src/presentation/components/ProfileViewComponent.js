import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from './atom/AppButton';

const ProfileViewComponent = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        // todo replace with original profile id
        navigate(`/profile/${1}`);
    }

    const handleFollowClick = () => {
        // todo call API to set/remove from follow
    };

    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full cursor-pointer" onClick={handleUserClick}>
                    <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                </div>
                <div className="flex flex-col ml-4 flex-1 cursor-pointer" onClick={handleUserClick}>
                    <h2 className="font-bold line-clamp-1">User Name</h2>
                    <p className="pr-4 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="ml-auto mr-16">
                    {true && true && (
                        // todo 1st true if userId !== profileId
                        <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
                    )}
                    {true && false && (
                        <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
                    )}
                </div>
            </div>
            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
        </div>
    );
};

export default ProfileViewComponent;
