import React from 'react';
import TopNavBar from '../../components/TopAppBar';

const PostDetail = () => {
    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '720px' }} className="mx-auto mt-8 text-start p-4">
                <h1 className="text-5xl font-bold mb-4 text-black mb-8">Title</h1>
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
                    </div>
                    <div className="ml-4">
                        <h2 className="font-bold">User Name</h2>
                        <p>5 min read · Nov 2, 2022</p>
                    </div>
                    <button className="ml-auto mr-2 bg-blue-500 text-white px-4 py-2 rounded mt-2">Follow</button>
                </div>
                <div className="mx-auto my-4 border-t border-gray-400 w-600"></div>
                <div className="flex justify-between my-0 w-600">
                    <div className="flex items-center">
                        <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">Like</button>
                        <p>Comments: 10</p>
                    </div>
                    <div>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Bookmark</button>
                    </div>
                </div>
                <div className="mx-auto my-4 border-t border-gray-400 w-600"></div>
                <p className="text-lg">Text</p>
            </div>
        </div>
    );
};

export default PostDetail;