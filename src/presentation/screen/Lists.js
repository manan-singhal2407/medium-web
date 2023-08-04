import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useParams } from 'react-router-dom';
import ic_private from '../../assets/images/ic_private.svg';
import PostViewComponent from '../components/PostViewComponent';
import ProfileSideViewComponent from '../components/ProfileSideViewComponent';

const Lists = () => {
    const params = useParams();
    const listId = params.id;

    const fetchListInfo = async () => {

    };

    useEffect(() => {
        fetchListInfo();
    }, []);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div style={{ width: '800px' }} className="mx-auto text-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-2 line-clamp-1 mr-4 ml-4 mt-2">List Name</h2>
                        <div className="flex items-center ml-4 mb-8">
                            <h2 className="text-xl line-clamp-1 mr-4">3 posts</h2>
                            {true && (
                                <img src={ic_private} alt='' />
                            )}
                        </div>
                        <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                        <PostViewComponent />
                    </div>
                </div>
                <div className="border-l border-gray-150"></div>
                <div style={{ width: '400px' }} className="mx-auto text-start">
                    <ProfileSideViewComponent />
                </div>
            </div>
        </div>
    );
};

export default Lists;