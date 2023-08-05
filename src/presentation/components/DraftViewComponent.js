import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic_private from '../../assets/images/ic_private.svg';
import { RemoveButton } from './atom/AppButton';

const DraftViewComponent = () => {
    const navigate = useNavigate();

    const handleDraftClick = () => {
        navigate(`/p/${1201}`);
    }

    const handleDeleteDraftClick = () => {
        alert('Call API');
    }

    return (
        <div className="flex items-center ml-4 mr-16 mt-8 mb-12 bg-gray-300">
            <div className="flex flex-col flex-1 pr-4 cursor-pointer"  onClick={handleDraftClick}>
                <h2 className="text-xl font-bold line-clamp-1 mr-4 ml-8 mt-2">Title</h2>
                <h2 className="text-md line-clamp-1 mr-4 ml-8">Text</h2>
                <h2 className="text-md line-clamp-1 my-4 ml-8">Last edited about 8 hours ago</h2>
            </div>
            <div className="ml-auto mr-8 item-center">
                <RemoveButton text='Delete' onClickHandle={handleDeleteDraftClick} />
            </div>
        </div>
    );
};

export default DraftViewComponent;