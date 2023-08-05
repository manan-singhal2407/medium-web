import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from './atom/AppButton';
import ic_close from '../../assets/images/ic_close.svg';

const ProfileSideViewComponent = ({ profile, sessionId }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [name, setName] = useState(profile.user_name);
    const [bio, setBio] = useState(profile.bio);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFollowClick = () => {
        alert('Call API');
    };

    const handleUpdateClick = () => {
        alert('Call API');
    };

    return (
        <div className='flex flex-col ml-8'>
            <div className="w-28 h-28 bg-gray-300 rounded-full">
                <img className="w-full h-full object-cover rounded-full" src={profile.user_image} alt='' />
            </div>
            <h2 className="font-bold line-clamp-1 ml-4 mt-4 text-xl">{profile.user_name}</h2>
            <p className="pr-4 ml-4 mt-2 mb-4 mr-12">{profile.bio}</p>
            {profile.user_id.toString() === sessionId && (
                <PrimaryButton text='Edit Profile' onClickHandle={() => setIsEditModalOpen(true)} />
            )}
            {isEditModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-blue-100 px-8 py-4 rounded-md shadow-md">
                        <div className='flex'>
                            <label className='text-2lg font-bold text-black mr-64'>Profile Information</label>
                            <img className='ml-auto mb-4 cursor-pointer' src={ic_close} alt='' onClick={() => setIsEditModalOpen(false)} />
                        </div>
                        <label className='text-md text-black mr-4'>Photo</label>
                        <div
                            style={{ width: '100px', height: '100px' }}
                            className="rounded-full bg-gray-300 relative cursor-pointer mt-2"
                            onClick={() => {
                                document.getElementById('imageInput').click();
                            }}
                        ><input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageSelect}
                                className="hidden"
                            />
                            {selectedImage && (
                                <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                            )}
                        </div>
                        <div>
                            <p className="text-black mb-1 mt-4">Name:</p>
                            <input
                                type="text"
                                name="text"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                                
                                className={`w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${name === '' ? "border-red-700" : ""
                                    }`}
                                placeholder="Name"
                            />
                            {name === '' ? (
                                <span className="text-xs text-red-700">Field is required</span>
                            ) : (
                                <span className="text-xs text-white">-</span>
                            )}
                        </div>
                        <div>
                            <p className="text-black mb-1">Bio:</p>
                            <input
                                type="text"
                                value={bio}
                                onChange={(e) => {setBio(e.target.value)}}
                                
                                className={'w-full border border-gray-300 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'}
                                placeholder="Bio"
                            />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleUpdateClick}
                                className="mx-4 bg-green-500 hover:bg-green-600 focus:outline-none text-white px-4 py-1.5 rounded-[2rem] border-none"
                            >Update</button>
                        </div>
                    </div>
                </div>
            )}
            {profile.user_id.toString() !== sessionId && !profile.is_user_following && (
                <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
            )}
            {profile.user_id.toString() !== sessionId && profile.is_user_following && (
                <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
            )}
        </div>
    );
};

export default ProfileSideViewComponent;
