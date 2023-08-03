import React from 'react';
import { useNavigate } from "react-router-dom";

const TopicsViewComponent = ({ topicsList }) => {
    const navigate = useNavigate();

    return (
        <div className="tag-container max-w-3xl mx-auto flex flex-wrap mr-12">
            {topicsList.map((topic) => {
                return (
                    <span key={topic} onClick={() => { navigate(`topic/${topic}`) }} className="tag-item inline-block bg-gray-200 border border-gray-300 px-4 py-2 rounded-[4rem] m-1 cursor-pointer">
                        {topic}
                    </span>
                );
            })}
        </div>
    );
};

export default TopicsViewComponent;