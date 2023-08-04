import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const PostDetail = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        // todo replace with original profile id
        navigate(`/profile/${1}`);
    }

    const handleFollowClick = () => {
        // todo call API to set/remove from follow
    };

    const handleLikeClick = () => {
        // todo call API to set/remove from bookmark
    };

    const handleBookmarkClick = () => {
        // todo call API to set/remove from bookmark
    };

    const handleEditClick = () => {
        // todo call API to set/remove from bookmark
        navigate(`/p/${1}`);
    };

    const handleDeleteClick = () => {
        // todo call API to set/remove from bookmark
    };

    return (
        <div className="flex-col items-top justify-center h-screen w-screen">
            <TopNavBar />
            <div style={{ width: '720px' }} className="mx-auto mt-8 text-start p-4">
                <h1 className="text-5xl font-bold mb-4 text-black mb-8">Title</h1>
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src='imageUrl' alt='' />
                    </div>
                    <div className="ml-4">
                        <h2 className="font-bold">User Name</h2>
                        <p>5 min read · Nov 2, 2022</p>
                    </div>
                    <div className="ml-auto mr-2">
                        {true && true && (
                            // todo 1st true if userId !== profileId
                            <PrimaryButton text='Follow' onClickHandle={handleFollowClick} />
                        )}
                        {true && false && (
                            <SecondaryButton text='Following' onClickHandle={handleFollowClick} />
                        )}
                    </div>
                </div>
                <div className="mx-auto my-4 border-t border-gray-150 w-600"></div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center mr-4">
                        <img className='mr-0.5' src={ic_view} alt='' />
                        {14000}
                    </div>
                    <div className="flex items-center mr-6 cursor-pointer">
                        <img className='cursor-pointer' src={false ? ic_liked : ic_like} alt='' onClick={handleLikeClick} />
                        {1076}
                    </div>
                    <div className="flex items-center mr-6 text-black">
                        <img className='mr-0.5' src={ic_comment} alt='' />
                        {34}
                    </div>
                    <div className="ml-auto flex items-center mr-6">
                        <img className='cursor-pointer' src={true ? ic_bookmark_selected : ic_bookmark} alt='' onClick={handleBookmarkClick} />
                        {true && (
                            <img className='mx-2 cursor-pointer' onClick={handleEditClick} src={ic_edit} alt='' />
                        )}
                        {true && (
                            <img className='cursor-pointer' onClick={handleDeleteClick} src={ic_delete} alt='' />
                        )}
                    </div>
                </div>
                <div className="mx-auto my-4 border-t border-gray-150 w-600"></div>
                <img className="w-full h-80 object-cover my-4" src='image_url' alt='' />
                <p className="text-lg">Some people in the industry do have degrees. I've worked with Doctors (not the medical kind, OK). Those with qualifications in the industry often choose not to mention them, because within many organizations there is a reverse snobbishness around education. Yet others wear glasses without medical reason (which really happens) and stand in front of a whiteboard on those video calls. I'd be more impressed if your whiteboard had more than a bullet-point list. That is, I know you don't understand the wider architecture of the application. Your whiteboard is like putting make-up on a pig.</p>
                <CommentsInput postId='1' commentId='3' />
                {true && (
                    // only show if comments > 1
                    <div>
                        <p className="text-lg font-bold text-black mt-8">Comments(18)</p>
                        {[...Array(10)].map((_, index) => (
                            <div key={index}>
                                <CommentViewComponent handleReplyClick={() => {}} />
                                {[...Array(1)].map((_, commentIndex) => (
                                    <div className='ml-16' key={commentIndex}>
                                        {commentIndex === 0 && (
                                            <CommentsInput postId='1' commentId='3' />
                                        )}
                                        <CommentViewComponent />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
                <p className="text-lg font-bold text-black mt-16">More from UserName</p>
                <div className="grid grid-cols-2 gap-4">
                    {[...Array(6)].map((_, index) => <TopicsPostViewComponent key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;