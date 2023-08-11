import React, { useEffect, useState } from 'react';

const Toast = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 4000);
    }, []);

    return (
        <div className='fixed bottom-10 left-10 rounded-md z-50 bg-gray-500 p-4 text-white' hidden={!isVisible}>{message}</div>
    );
};

export default Toast;