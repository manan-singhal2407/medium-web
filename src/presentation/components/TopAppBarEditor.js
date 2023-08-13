import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './atom/AppButton';
import ic_history from '../../assets/images/ic_history.svg'
import { useNavigate } from 'react-router-dom';

const TopNavBarEditor = ({ textShowingSavingHistory, showRevisionHistoryIcon, postId, onClickPublishButton }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleRevisionHistory = () => {
        navigate(`/version/${postId}`);
    }

    useEffect(() => {
        setUserName(localStorage.getItem('user_name'));
    }, []);

    return (
        <nav style={{ width: '1100px' }} className="m-auto w-screen text-white flex justify-between items-center px-8 py-2">
            <div className="flex items-center flex-grow">
                <span className='text-black mx-4 font-bold text-md'>Draft in {userName}</span>
                <span className='text-gray-500 mx-4 text-sm'>{textShowingSavingHistory}</span>
            </div>
            {showRevisionHistoryIcon && (
                <img className='cursor-pointer' src={ic_history} alt='' onClick={handleRevisionHistory} />
            )}
            <PrimaryButton text='Publish' onClickHandle={onClickPublishButton} />
        </nav>
    );
};

export default TopNavBarEditor;
