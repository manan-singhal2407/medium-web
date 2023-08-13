import { returnRandomPosts } from "../dummy/DummyData";
import CreatePostEntity from "../model/CreatePostEntity";
import DraftEntity from "../model/DraftEntity";
import ListBookmarkPostsEntity from "../model/ListBookmarkPostsEntity";
import ListsBookmarkEntity from "../model/ListsBookmarkEntity";
import PostByIdEntity from "../model/PostByIdEntity";
import PostEntity from "../model/PostEntity";
import PostHomeEntity from "../model/PostHomeEntity";

export default class PostRepositoryImpl {
    async createNewPostForUser(title, topic, image, text, publish) {
        var topicsArray = topic.split(',');
        var trimmedArray = topicsArray.map(function(item) {
            return item.trim();
        });
        const postData = {
            "token": localStorage.getItem('user_token'),
            "title": title,
            "topics": trimmedArray,
            "featured_image": image,
            "content": text,
            "publish_status": publish,
        };

        try {
            const response = await fetch(`http://127.0.0.1:3000/create-post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return new CreatePostEntity(data.post);
                }
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    async updateUserPostWithId(postId, title, topic, image, text, publish) {
        var topicsArray = topic.split(',');
        var trimmedArray = topicsArray.map(function(item) {
            return item.trim();
        });
        const postData = {
            "token": localStorage.getItem('user_token'),
            "title": title,
            "post_id": postId,
            "topics": trimmedArray,
            "featured_image": image,
            "content": text,
            "publish_status": publish,
        };

        try {
            const response = await fetch(`http://127.0.0.1:3000/update-post`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return new CreatePostEntity(data.post);
                }
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    async getTopPostsForUser() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/get-top-posts?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const postHomeEntities = [];
                    for (const post of data.posts) {
                        const postHomeEntity = new PostHomeEntity(post);
                        postHomeEntities.push(postHomeEntity);
                    }

                    return postHomeEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async getRecommendationPostForUser() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/get-recommendations?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const postHomeEntities = [];
                    for (const post of data.recommendations) {
                        const postHomeEntity = new PostHomeEntity(post);
                        postHomeEntities.push(postHomeEntity);
                    }

                    return postHomeEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async getAllPosts() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/view-posts?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const postEntities = [];
                    for (const post of data.posts) {
                        const postEntity = new PostEntity(post);
                        postEntities.push(postEntity);
                    }

                    return postEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async getCurrentUserPosts() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/view-my-posts?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const postEntities = [];
                    for (const post of data.posts) {
                        const postEntity = new PostEntity(post);
                        postEntities.push(postEntity);
                    }

                    return postEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async getPostById(postId) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/get-post?token=${localStorage.getItem('user_token')}&post_id=${postId}`, {
                method: 'GET'
            });
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return new PostByIdEntity(data.post);
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async likePostById(postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/like-post`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Liked!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async dislikePostById(postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/unlike-post`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'UnLiked!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async addCommentToPost(postId, message) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);
        formData.append('comment_description', message);

        try {
            const response = await fetch(`http://localhost:3000/add-comment`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Added the comment!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async deletePostById(postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/delete-post`, {
                method: 'DELETE',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Post successfully deleted!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async addPostToBoookmarkById(postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/add-to-save-laters`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Saved your post') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async getBoookmarkInfoAsList() {
        try {
            const response = await fetch(`http://localhost:3000/get-save-laters?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return new ListsBookmarkEntity(data.savelaters.length);
                }
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    async getAllPostFromBookmark() {
        try {
            const response = await fetch(`http://localhost:3000/get-save-laters?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const listsBookmarkEntities = [];
                    for (const bookmark of data.savelaters) {
                        const listsBookmarkEntity = new ListBookmarkPostsEntity(bookmark);
                        listsBookmarkEntities.push(listsBookmarkEntity);
                    }
                    return listsBookmarkEntities;
                }
            }
            return 0;
        } catch (error) {
            return 0;
        }
    }

    async addPostToDraft(postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/add-to-drafts`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Added to Drafts') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async deleteDraftWithId(draftId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('draft_id', draftId);

        try {
            const response = await fetch(`http://localhost:3000/remove-from-drafts`, {
                method: 'DELETE',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Removed from Drafts') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async getAllDrafts() {
        try {
            const response = await fetch(`http://localhost:3000/get-drafts?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const draftEntities = [];
                    for (const draft of data.drafts) {
                        const draftEntity = new DraftEntity(draft);
                        draftEntities.push(draftEntity);
                    }
                    return draftEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }





    async publishPostToDatabase(title, topic, image, text) {
        const postData = {
            "post": {
                "title": "Post Title",
                "topic": "Post Topic",
                "featured_image": "URL of the featured image",
                "text": "aa",
                "user_id": 12,
                "published_at": "2023-08-05T06:35:15.717Z",
                "theme_name": "test"
            }
        };
        try {
            const response = await fetch('http://127.0.0.1:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(postData)
            });
            if (response.status === 201) {
                const data = await response.json();
                return data.id;
            } else {
                return -1;
            }
        } catch (error) {
            console.log(error);
            return -1;
        }
    }

    getPostsForTopic(topicName) {
        const postList = returnRandomPosts(6);
        const posts = postList.map(data => new PostEntity(data));
        return posts;
    }
}