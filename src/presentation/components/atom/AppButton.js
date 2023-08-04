import React from 'react';

const PrimaryButton = ({ text, onClickHandle }) => {
    return (
        <button className="mr-auto ml-4 bg-green-500 hover:bg-green-600 focus:outline-none text-white px-4 py-1.5 rounded-[2rem] border-none"
            onClick={onClickHandle}>{text}</button>
    );
};

const SecondaryButton = ({ text, onClickHandle }) => {
    return (
        <button className="mr-auto ml-4 bg-transparent focus:outline-none text-green-500 px-4 py-1.5 rounded-[2rem] border-2 border-green-500 hover:border-green-500"
            onClick={onClickHandle}>{text}</button>
    );
};

export { PrimaryButton, SecondaryButton };