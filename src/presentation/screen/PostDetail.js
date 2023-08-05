import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopNavBar from '../components/TopAppBar';
import { PrimaryButton, SecondaryButton } from '../components/atom/AppButton';
import ic_view from '../../assets/images/ic_view.svg';
import ic_like from '../../assets/images/ic_like.svg';
import ic_liked from '../../assets/images/ic_liked.svg';
import ic_comment from '../../assets/images/ic_comment.svg';
import ic_bookmark from '../../assets/images/ic_bookmark.svg';
import ic_bookmark_selected from '../../assets/images/ic_bookmark_selected.svg';
import ic_edit from '../../assets/images/ic_edit.svg';
import ic_delete from '../../assets/images/ic_delete.svg';
import TopicsPostViewComponent from '../components/TopicsPostViewComponent';
import CommentViewComponent from '../components/CommentViewComponent';
import CommentsInput from '../components/CommentInput';
import PostRepositoryImpl from '../../data/repositories/PostRepositoryImpl';

const PostDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const postId = params.id;
    const [userId, setUserId] = useState('');
    const [post, setPost] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [commentId, setCommentId] = useState('');

    const fetchPostUsingId = async () => {
        setTimeout(() => {
            const postRepositoryImpl = new PostRepositoryImpl();
            const data = postRepositoryImpl.getPostById(postId);
            setPost(data[0]);
            setUserPosts([...userPosts, ...data[1]]);
        }, Math.floor(Math.random() * 1500) + 500);
    };

    useEffect(() => {
        setUserId(localStorage.getItem('user_id') === null || localStorage.getItem('user_id') === '' ? '' : localStorage.getItem('user_id'));
        fetchPostUsingId();
    }, []);

    const handleUserClick = () => {
        navigate(`/profile/${post.user_id}`);
    }

    const handleFollowClick = () => {
        alert('Call API');
    };

    const handleLikeClick = () => {
        alert('Call API');
    };

    const handleBookmarkClick = () => {
        alert('Call API');
    };

    const handleEditClick = () => {
        navigate(`/p/${post.post_id}`);
    };

    const handleDeleteClick = () => {
        alert('Call API');
    };

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            {post !== null && (
                <div style={{ width: '720px' }} className="mx-auto mt-8 text-start p-4">
                    <h1 className="text-5xl font-bold mb-4 text-black mb-8">{post.title}</h1>
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full cursor-pointer" onClick={handleUserClick}>
                            <img className="w-full h-full object-cover rounded-full" src={post.user_image} alt='' />
                        </div>
                        <div className="ml-4">
                            <h2 className="font-bold cursor-pointer" onClick={handleUserClick}>{post.user_name}</h2>
                            <p>{post.time_read} · {post.last_updated_at.substring(0, 10)}</p>
                        </div>
                        <div className="ml-auto mr-2">
                            {userId !== post.user_id && !post.is_user_following && (
                                <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
                            )}
                            {userId !== post.user_id && post.is_user_following && (
                                <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
                            )}
                        </div>
                    </div>
                    <div className="mx-auto my-4 border-t border-gray-150 w-600"></div>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                        <div className="flex items-center mr-4">
                            <img className='mr-0.5' src={ic_view} alt='' />
                            {post.views_count}
                        </div>
                        <div className="flex items-center mr-6 curson-pointer">
                            <img className='cursor-pointer' src={post.is_user_liked ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                            {post.likes_count}
                        </div>
                        <div className="flex items-center mr-6 text-black">
                            <img className='mr-0.5' src={ic_comment} alt='' />
                            {post.comments_count}
                        </div>
                        <div className="ml-auto flex items-center mr-6">
                            <img className='cursor-pointer' src={post.is_user_bookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                            {post.user_id === userId && (
                                <img className='mx-2 cursor-pointer' onClick={handleEditClick} src={ic_edit} alt='' />
                            )}
                            {post.user_id === userId && (
                                <img className='cursor-pointer' onClick={handleDeleteClick} src={ic_delete} alt='' />
                            )}
                        </div>
                    </div>
                    <div className="mx-auto my-4 border-t border-gray-150 w-600"></div>
                    <img className="w-full h-80 object-cover my-4 bg-gray-150" src={post.image} alt='' />
                    <p className="text-lg">{post.text}</p>
                    <CommentsInput postId='1' commentId='3' />
                    {post.comments_count !== 0 && (
                        <div>
                            <p className="text-lg font-bold text-black mt-8">Comments({post.comments_count})</p>
                            {[...Array(3)].map((_, index) => (
                                <div key={index}>
                                    <CommentViewComponent showReply={true} handleReplyClick={() => { setCommentId(index) }} />
                                    {[...Array(1)].map((_, commentIndex) => (
                                        <div className='ml-16' key={commentIndex}>
                                            {commentIndex === 0 && index === commentId && (
                                                <CommentsInput postId='1' commentId='3' />
                                            )}
                                            <CommentViewComponent showReply={false} />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {userPosts.length !== 0 && (
                        <div>
                            <p className="text-lg font-bold text-black mt-16">More from UserName</p>
                            <div className="grid grid-cols-2 gap-4">
                                {userPosts.map((post, index) => <TopicsPostViewComponent post={post} key={index} />)}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PostDetail;