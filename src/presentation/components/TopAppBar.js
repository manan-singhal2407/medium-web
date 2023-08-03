import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [likesRange, setLikesRange] = useState('');
    const [commentsRange, setCommentsRange] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const handleApplyFilters = () => {
        setIsFilterModalOpen(false);
        setFromDate('');
        setToDate('');
        setLikesRange('');
        setCommentsRange('');
    };

    useEffect(() => {
        setIsUserLoggedIn(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? false : true);
    }, []);

    return (
        <nav className="w-screen text-white flex justify-between items-center px-8 py-2">
            <div className="flex items-center flex-grow">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            navigate(`/search/${searchText}`);
                        }
                    }}
                    className="w-60 px-4 py-2 mr-2 rounded-md focus:outline-none text-black bg-gray-200 focus:ring focus:border-black-300"
                />
                <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Filter
                </button>

                {isFilterModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                        <div className="bg-blue-100 p-4 rounded-md shadow-md">
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <label className='text-black mr-4'>From:</label>
                                    <input
                                        type="date"
                                        value={fromDate}
                                        max={toDate !== '' ? toDate : today}
                                        onChange={(e) => setFromDate(e.target.value)}
                                        className="px-2 py-1 rounded-md focus:outline-none text-black bg-white-200 mr-4 focus:ring focus:border-black-300"
                                    />
                                </div>
                                <div>
                                    <label className='text-black mr-4'>To:</label>
                                    <input
                                        type="date"
                                        value={toDate}
                                        min={fromDate}
                                        max={today}
                                        onChange={(e) => setToDate(e.target.value)}
                                        className="px-2 py-1 rounded-md focus:outline-none text-black bg-white-200 mr-4 focus:ring focus:border-black-300"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="mr-4">
                                    <label className='text-black mr-4'>Likes:</label>
                                    <select
                                        value={likesRange}
                                        onChange={(e) => setLikesRange(e.target.value)}
                                        className="px-2 py-1 mr-2 rounded-md focus:outline-none text-black bg-white-200 mr-4 focus:ring focus:border-black-300"
                                    >
                                        <option value="">Likes</option>
                                        <option value="1-100">1-100</option>
                                        <option value="101-500">101-500</option>
                                        <option value="501-1000">501-1000</option>
                                        <option value="1001+">1001+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-black mr-4'>Comments:</label>
                                    <select
                                        value={commentsRange}
                                        onChange={(e) => setCommentsRange(e.target.value)}
                                        className="px-2 py-1 mr-2 rounded-md focus:outline-none text-black bg-white-200 mr-4 focus:ring focus:border-black-300"
                                    >
                                        <option value="">Comments</option>
                                        <option value="1-50">1-50</option>
                                        <option value="51-100">51-100</option>
                                        <option value="101-200">101-200</option>
                                        <option value="201+">201+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => setIsFilterModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 mr-8"
                                >Close</button>
                                <button
                                    onClick={handleApplyFilters}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >Apply</button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
            {isUserLoggedIn
                ? <div className="flex items-center">
                    <div className="mr-6">
                        <a href="/new-story" className="text-black hover:text-blue-300">Add Post</a>
                    </div>
                    <div className="mr-6">
                        <a href="/profile" className="text-black hover:text-blue-300">Profile</a>
                    </div>
                    <div>
                        <a href="" className="text-black hover:text-blue-300" onClick={() => {
                            localStorage.removeItem('user_id');
                            navigate('/');
                        }}>Logout</a>
                    </div>
                </div>
                : <div className="flex items-center">
                    <div className="mr-6">
                        <a href="/login" className="text-black hover:text-blue-300">Login</a>
                    </div>
                    <div className="mr-6">
                        <a href="/signup" className="text-black hover:text-blue-300">Sign Up</a>
                    </div>
                </div>
            }
        </nav>
    );
};

export default TopNavBar;
