import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from './atom/AppButton';
import ProfileRepositoryImpl from '../../data/repositories/ProfileRepositoryImpl';

const ProfileViewComponent = ({ profile }) => {
    const [isUserFollowing, setIsUserFollowing] = useState(profile.is_user_following);

    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${profile.user_id}`);
    }

    const handleFollowClick = async () => {
        const profileRepositoryImpl = new ProfileRepositoryImpl();
        const success = await profileRepositoryImpl.followUser(profile.user_id);
        setIsUserFollowing(success);
    };

    const handleUnfollowClick = async () => {
        const profileRepositoryImpl = new ProfileRepositoryImpl();
        const success = await profileRepositoryImpl.unfollowUser(profile.user_id);
        setIsUserFollowing(!success);
    };

    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full cursor-pointer" onClick={handleUserClick}>
                    <img className="w-full h-full object-cover rounded-full" src='image_url' alt='' />
                </div>
                <div className="flex flex-col ml-4 flex-1 cursor-pointer" onClick={handleUserClick}>
                    <h2 className="font-bold line-clamp-1">{profile.user_name}</h2>
                    <p className="pr-4 line-clamp-2">{profile.bio}</p>
                </div>
                <div className="ml-auto mr-16">
                    {localStorage.getItem('user_id') !== profile.user_id.toString() && !isUserFollowing && (
                        <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
                    )}
                    {localStorage.getItem('user_id') !== profile.user_id.toString() && isUserFollowing && (
                        <SecondaryButton text='Following' onClickHandle={handleUnfollowClick} />
                    )}
                </div>
            </div>
            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
        </div>
    );
};

export default ProfileViewComponent;
