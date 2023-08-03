import React, { useEffect, useState } from 'react';
import './Home.css';
import HomeRepositoryImpl from '../../../data/repositories/HomeRepositoryImpl';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [homeEntity, setHomeEntity] = useState(null);

    const fetchHomePageData = async () => {
        const homeRepository = new HomeRepositoryImpl();
        setHomeEntity(await homeRepository.fetchHomePageInfoForUser(userId));
    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchHomePageData();
    }, []);

    return (
        <div>
            
            <button onClick={() => navigate("/signup")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
            <h1>Trending Posts</h1>
            {/* <ul>
                {this.state.trendingPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p>
                            <strong>Likes:</strong> {post.likes}
                            <br />
                            <strong>Comments:</strong> {post.comments}
                        </p>
                    </li>
                ))}
            </ul>
            <h1>Suggested Posts</h1>
            <ul>
                {this.state.suggestedPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p>
                            <strong>Likes:</strong> {post.likes}
                            <br />
                            <strong>Comments:</strong> {post.comments}
                        </p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Home;