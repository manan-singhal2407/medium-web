import React from 'react';
import TopNavBar from '../components/TopAppBar';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar searchTextParam={searchParams.get('q')} fromDateParam={searchParams.get('fromDate')}
                toDateParam={searchParams.get('toDate')} likesParam={searchParams.get('likes')}
                commentsParam={searchParams.get('comments')} />
            <div style={{ width: '720px' }} className="mx-auto mt-8 text-start p-4">
                <h1 className="text-5xl font-bold mb-4 text-black mb-8">Manan</h1>
            </div>
        </div>
    );
};

export default Search;