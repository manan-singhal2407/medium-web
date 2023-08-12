import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RemoveButton } from './atom/AppButton';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const DraftViewComponent = ({ draft }) => {
    const navigate = useNavigate();
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDraftClick = () => {
        navigate(`/p/${draft.draft_id}`);
    }

    const handleDeleteDraftClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const success = await postRepositoryImpl.deleteDraftWithId(draft.draft_id);
        if (success) {
            setIsDeleted(true);
        }
    }

    if (isDeleted) {
        return (<div></div>);
    }
    return (
        <div className="flex items-center ml-4 mr-16 mt-8 mb-12 bg-gray-300">
            <div className="flex flex-col flex-1 pr-4 cursor-pointer" onClick={handleDraftClick}>
                <h2 className="text-xl font-bold line-clamp-1 mr-4 ml-8 mt-2">{draft.title}</h2>
                <h2 className="text-md line-clamp-1 mr-4 ml-8">{draft.text}</h2>
                <h2 className="text-md line-clamp-1 my-4 ml-8">Last edited at {draft.created_at.slice(11, 16)} on {draft.created_at.slice(0, 10)}</h2>
            </div>
            <div className="ml-auto mr-8 item-center">
                <RemoveButton text='Delete' onClickHandle={handleDeleteDraftClick} />
            </div>
        </div>
    );
};

export default DraftViewComponent;