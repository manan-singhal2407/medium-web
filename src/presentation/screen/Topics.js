import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import TopNavBar from '../components/TopAppBar';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';

const Topics = () => {
    const params = useParams();
    const topicName = params.name;
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBar />
            <div className="flex flex-col items-center mt-8">
                <p className="text-4xl font-bold text-black">{topicName}</p>
                <p className="text-md mt-4 font-bold text-gray-500">Topic  ·  2.14M Posts</p>
                <div style={{ width: '1200px' }} className="mt-4 grid grid-cols-3 gap-4">
                    <TopicsPostViewComponent />
                    <TopicsPostViewComponent />
                    <TopicsPostViewComponent />
                    <TopicsPostViewComponent />
                    <TopicsPostViewComponent />
                    <TopicsPostViewComponent />
                </div>
            </div>
        </div>
    );
};

export default Topics;