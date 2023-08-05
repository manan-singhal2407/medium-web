import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from './atom/AppButton';
import ic_close from '../../assets/images/ic_close.svg';

const TopNavBar = ({ searchTextParam, fromDateParam, toDateParam, likesParam, commentsParam }) => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState(searchTextParam === undefined ? '' : searchTextParam);
    const [fromDate, setFromDate] = useState(fromDateParam === undefined ? '' : fromDateParam);
    const [toDate, setToDate] = useState(toDateParam === undefined ? '' : toDateParam);
    const [likesRange, setLikesRange] = useState(likesParam === undefined ? '' : likesParam);
    const [commentsRange, setCommentsRange] = useState(commentsParam === undefined ? '' : commentsParam);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userId, setUserId] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const handleClearFilter = () => {
        setIsFilterModalOpen(false);
        if (searchText === '' || searchText === null) {
            navigate('/');
        } else {
            navigate({
                pathname: '/search',
                search: `?q=${searchText}&fromDate=${fromDate}&toDate=${toDate}&likes=${likesRange}&comments=${commentsRange}`,
            });
        }
        setFromDate('');
        setToDate('');
        setLikesRange('');
        setCommentsRange('');
    };

    const handleApplyFilters = () => {
        setIsFilterModalOpen(false);
        navigate({
            pathname: '/search',
            search: `?q=${searchText}&fromDate=${fromDate}&toDate=${toDate}&likes=${likesRange}&comments=${commentsRange}`,
        });
    };

    useEffect(() => {
        setIsUserLoggedIn(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? false : true);
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
    }, []);

    return (
        <nav className="w-screen text-white flex justify-between items-center px-16 py-2">
            <div className="flex items-center flex-grow">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchText !== '') {
                            navigate({
                                pathname: '/search',
                                search: `?q=${searchText}`,
                            });
                        }
                    }}
                    className="w-60 px-4 py-2 mr-2 rounded-md focus:outline-none text-black bg-gray-200 focus:ring focus:border-black-300"
                />
                <PrimaryButton text='Filter' onClickHandle={() => setIsFilterModalOpen(true)} />
                {isFilterModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                        <div className="bg-blue-100 p-4 rounded-md shadow-md">
                            <img className='ml-auto mb-4 mr-4 cursor-pointer' src={ic_close} alt='' onClick={() => setIsFilterModalOpen(false)} />
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <label className='text-black mr-4'>From:</label>
                                    <input
                                        type="date"
                                        value={fromDate}
                                        max={toDate !== null && toDate !== '' ? toDate : today}
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
                                    onClick={handleClearFilter}
                                    className="mx-4 bg-transparent focus:outline-none text-red-500 px-4 py-1.5 rounded-[2rem] border-2 border-red-500 hover:border-red-500"
                                >Clear</button>
                                <button
                                    onClick={handleApplyFilters}
                                    className="mx-4 bg-green-500 hover:bg-green-600 focus:outline-none text-white px-4 py-1.5 rounded-[2rem] border-none"
                                >Apply</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isUserLoggedIn
                ? <div className="flex items-center">
                    <div className="mr-6">
                        <a href="/allPosts" className="text-black hover:text-blue-300">All Posts</a>
                    </div>
                    <div className="mr-6">
                        <a href="/new-story" className="text-black hover:text-blue-300">Add Post</a>
                    </div>
                    <div className="mr-6">
                        <a href={`/profile/${userId}`} className="text-black hover:text-blue-300">Profile</a>
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
                        <a href="/allPosts" className="text-black hover:text-blue-300">All Posts</a>
                    </div>
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
