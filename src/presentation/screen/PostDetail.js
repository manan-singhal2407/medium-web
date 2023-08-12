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
import StripePayment from '../components/StripePayment';
import { returnRandomPosts } from '../../data/dummy/DummyData';

const PostDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const postId = params.id;
    const [userId, setUserId] = useState('');
    const [post, setPost] = useState(null);
    const [showPayment, setShowPayment] = useState(false);
    const [userPosts, setUserPosts] = useState([]);
    const [commentId, setCommentId] = useState('');

    const [isUserLiked, setIsUserLiked] = useState(null);
    const [likesCount, setLikesCount] = useState(null);
    const [isUserBookmark, setIsUserBookmark] = useState(null);

    const fetchPostUsingId = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const data = await postRepositoryImpl.getPostById(postId);
        setPost(data);
        setIsUserLiked(data.is_user_liked);
        setLikesCount(data.likes_count);
        setIsUserBookmark(data.is_user_bookmark);


        let viewList = localStorage.getItem('post');
        if (viewList === undefined || viewList === null) {
            viewList = 0;
            localStorage.setItem('post', viewList);
        }
        let exist = false;
        for (let i = 0; i < viewList.length; i++) {
            console.log(viewList[i]);
            if (viewList[i] === data.post_id) {
                exist = true;
            }
        }
        if (!exist) {
            let totalCount = localStorage.getItem('count');
            if (totalCount === undefined || totalCount === null) {
                totalCount = 2;
                localStorage.setItem('count', totalCount);
            }
            if (totalCount > viewList) {
                viewList++;
                localStorage.setItem('post', viewList);
                setShowPayment(false);
            } else {
                setShowPayment(true);
            }
        }
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

    const handleLikeClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isUserLiked) {
            const success = await postRepositoryImpl.dislikePostById(post.post_id);
            if (success) {
                setIsUserLiked(false);
                setLikesCount(likesCount-1);
            }
        } else {
            const success = await postRepositoryImpl.likePostById(post.post_id);
            if (success) {
                setIsUserLiked(true);
                setLikesCount(likesCount+1);
            }
        }
    };

    const handleBookmarkClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        if (isUserBookmark) {
            alert('No such API');
        } else {
            const success = await postRepositoryImpl.addPostToBoookmarkById(post.post_id);
            if (success) {
                setIsUserBookmark(true);
            }
        }
    };

    const handleEditClick = () => {
        navigate(`/p/${post.post_id}`);
    };

    const handleDeleteClick = async () => {
        const postRepositoryImpl = new PostRepositoryImpl();
        const success = await postRepositoryImpl.deletePostById(post.post_id);
        if (success) {
            navigate('/');
        }
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
                            <p>{post.time_read} · {post.last_updated_at.slice(0, 10)}</p>
                        </div>
                        <div className="ml-auto mr-2">
                            {localStorage.getItem('user_id') !== post.user_id.toString() && !post.is_user_following && (
                                <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
                            )}
                            {localStorage.getItem('user_id') !== post.user_id.toString() && post.is_user_following && (
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
                            <img className='cursor-pointer' src={isUserLiked ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                            {likesCount}
                        </div>
                        <div className="flex items-center mr-6 text-black">
                            <img className='mr-0.5' src={ic_comment} alt='' />
                            {post.comments_count}
                        </div>
                        <div className="ml-auto flex items-center mr-6">
                            <img className='cursor-pointer' src={isUserBookmark ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                            {localStorage.getItem('user_id') === post.user_id.toString() && (
                                <img className='mx-2 cursor-pointer' onClick={handleEditClick} src={ic_edit} alt='' />
                            )}
                            {post.user_id.toString() === userId && (
                                <img className='cursor-pointer' onClick={handleDeleteClick} src={ic_delete} alt='' />
                            )}
                        </div>
                    </div>
                    <div className="mx-auto my-4 border-t border-gray-150 w-600"></div>
                    <img className="w-full h-80 object-cover my-4 bg-gray-150" src={post.image} alt='' />

                    {showPayment === true ? userId !== '' ? <div className="flex justify-center items-center bg-gray-150">
                        <div className="w-full h-80 px-32 bg-gray-150 flex items-center">
                            <p className="text-lg">You need to pay to view more posts</p>
                            <StripePayment
                                name={'Your Company Name'}
                                description={'Item that you sold'}
                                amount={5.00}
                            />
                        </div>
                    </div> : <div className="flex justify-center items-center bg-gray-150">
                        <div className="w-full h-80 px-32 bg-gray-150 flex items-center">
                            <p className="text-lg">You need to pay to view more posts</p>
                            <PrimaryButton text='Login' onClickHandle={() => { navigate('/login') }} />
                        </div>
                    </div>
                        : <div>
                            <p className="text-lg">{post.text}</p>
                            <CommentsInput postId={post.post_id} commentId='-1' handleAddComment={fetchPostUsingId} />
                            {post.commentList.length !== 0 && (
                                <div>
                                    <p className="text-lg font-bold text-black mt-8">Comments({post.commentList.length})</p>
                                    {post.commentList.map((comment, index) => (
                                        <div key={index}>
                                            <CommentViewComponent comment={comment} showReply={true} handleReplyClick={() => { setCommentId(index) }} />
                                            {[...Array(1)].map((_, commentIndex) => (
                                                <div className='ml-16' key={commentIndex}>
                                                    {commentIndex === 0 && index === commentId && (
                                                        <CommentsInput postId={post.post_id} commentId={comment.comment_id} />
                                                    )}
                                                    <CommentViewComponent comment={comment} showReply={false} handleAddComment={fetchPostUsingId} />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}</div>}

                    {true && (
                        // userPosts.length !== 0
                        <div>
                            <p className="text-lg font-bold text-black mt-16">More from {post.user_name}</p>
                            <div className="grid grid-cols-2 gap-4">
                                {returnRandomPosts(6).map((post, index) => <TopicsPostViewComponent post={post} key={index} />)}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PostDetail;