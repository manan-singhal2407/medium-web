import React, { useState } from 'react';
import TopNavBar from '../components/TopAppBar';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = searchParams.get('q');

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar searchTextParam={searchText} fromDateParam={searchParams.get('fromDate')}
                toDateParam={searchParams.get('toDate')} likesParam={searchParams.get('likes')}
                commentsParam={searchParams.get('comments')} />
            <div style={{ width: '1200px' }} className="mx-auto mt-8 text-start p-4 flex">
                <div style={{ width: '800px' }} className="mx-auto text-start">
                    {searchText !== '' && (
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-black mb-12 pl-4">Results for {searchText}</h1>
                            <div>
                                <div>
                                    <a href="#" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(1)}>Posts</a>
                                    <a href="#people" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(2)}>People</a>
                                    <a href="#topics" className={`px-1 mx-4 my-2 py-4 text-gray-700 hover:text-black ${activeTab === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setActiveTab(3)}>Topics</a>
                                </div>
                            </div>
                            <div className="ml-4 mr-12 my-4 border-t border-gray-150"></div>
                        </div>
                    )}
                </div>
                <div style={{ width: '400px' }} className="mx-auto text-start">
                    {searchText !== '' && (
                        <h1 className="text-5xl font-bold mb-4 text-black mb-8">----</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;