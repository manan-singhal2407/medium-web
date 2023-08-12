import React, { useState } from "react";
import { PrimaryButton } from "./atom/AppButton";
import PostRepositoryImpl from "../../data/repositories/PostRepositoryImpl";

const CommentsInput = ({ postId, commentId, handleAddComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async () => {
        if (comment.trim() !== '') {
            if (commentId === '-1') {
                const postRepositoryImpl = new PostRepositoryImpl();
                const success = await postRepositoryImpl.addCommentToPost(postId, comment);
                if (success) {
                    console.log('ssss');
                    handleAddComment();
                }
            } else {
                alert('Calling reply API');
            }
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