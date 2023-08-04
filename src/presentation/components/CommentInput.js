import React, { useState } from "react";
import { PrimaryButton } from "./atom/AppButton";

const CommentsInput = ({ postId, commentId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (comment.trim() !== '') {
            // todo update API and send comment to database
        }
        setComment('');
    };

    return (
        <div className="my-4 mr-12 border border-black rounded p-4">
            <textarea
                className="block w-full h-20 border-null rounded mb-4 resize-none overflow-hidden bg-transparent hover:border-null focus:border-null focus:outline-none"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => { setComment(e.target.value) }}
            />
            <div className="ml-auto w-full flex">
                <div className="w-full"></div>
                <PrimaryButton text='Comment' onClickHandle={handleSubmit} />
            </div>
        </div>
    );
};

export default CommentsInput;