import React, { useState } from 'react';

const NewStory = () => {
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission logic here, e.g., send the data to a backend API
        console.log('New post data:', {
            title,
            topic,
            featuredImage,
            text,
        });
        // Reset the form fields after submission
        setTitle('');
        setTopic('');
        setFeaturedImage('');
        setText('');
    };

    return (
        <div>
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Topic:</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Featured Image URL:</label>
                    <input
                        type="text"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Text:</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default NewStory;