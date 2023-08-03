import React from 'react';

const TopicsPostViewComponent = () => {
    return (
        <div className="flex flex-col flex-1 p-4 m-4">
            <div className="h-52 bg-gray-300 rounded-[1rem]">
                <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
            </div>
            <div className="flex items-center mt-4">
                <div className="w-6 h-6 bg-gray-300 rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src='https://medium.com/@nickfthilton?source=home---------1---------------------2650d528_5d8d_4dee_98d1_e179a810d8c5-------7' alt='' />
                </div>
                <h2 className="line-clamp-1 ml-2 text-black">Nick Hilton</h2>
            </div>
            <h2 className="text-xl font-bold line-clamp-1 mt-2">Post Name</h2>
            <p className="mt-2 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="mt-4 text-md text-green-500">5 min read · Nov 2, 2022</p>
            <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14.828V5a2 2 0 00-2-2H7a2 2 0 00-2 2v9.828l-2 2V19h18v-1.172l-2-2zM15 19V9M9 19V9M12 19v-3"
                        />
                    </svg>
                    {0}
                </div>
                <div className="flex items-center mr-6 curson-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                    </svg>
                    {0}
                </div>
                <div className="flex items-center mr-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    {0}
                </div>
                <div className="ml-auto flex items-center mr-6 curson-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TopicsPostViewComponent;
