import React from 'react';

const TrendingPostComponent = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex items-center ml-4 my-4">
                <div className="flex flex-col flex-1 pr-4">
                    <div className="flex items-center mt-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src='https://medium.com/@nickfthilton?source=home---------1---------------------2650d528_5d8d_4dee_98d1_e179a810d8c5-------7' alt='' />
                        </div>
                        <h2 className="line-clamp-1 ml-4 text-black">Nick Hilton</h2>
                    </div>
                    <h2 className="text-xl font-bold line-clamp-3">Ashes to ashes, dust to dust, Twitter to X</h2>
                    <p className="mt-2 text-xs text-gray-500">5 min read · Nov 2, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingPostComponent;
