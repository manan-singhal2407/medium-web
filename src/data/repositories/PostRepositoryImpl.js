import { dummyPost, returnRandomPosts } from "../dummy/DummyData";
import PostEntity from "../model/PostEntity";

export default class PostRepositoryImpl {
    async createNewPostToUser(title, topic, image, text) {
        var topicsArray = topic.split(',');
        var trimmedArray = topicsArray.map(function(item) {
            return item.trim();
        });
        const postData = {
            "token": localStorage.getItem('user_token'),
            "title": title,
            "topics": trimmedArray,
            "featured_image": image,
            "content": text
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

                    console.log(data.post);
                }
            }
            return false;
        } catch (error) {
            return false;
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
                    console.log(data);
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
                    console.log(data);
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

    getAllPosts() {
        const postList = returnRandomPosts(6);
        const posts = postList.map(data => new PostEntity(data));
        return posts;
    }

    getPostsForTopic(topicName) {
        const postList = returnRandomPosts(6);
        const posts = postList.map(data => new PostEntity(data));
        return posts;
    }

    getPostById(postId) {
        const posts = dummyPost.map(data => new PostEntity(data));
        let post = null;
        let userPosts = [];
        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].post_id.toString()) {
                post = posts[i];
            }
        }
        for (let i = 0; i < posts.length; i++) {
            if (post.user_id === posts[i].user_id && post.post_id !== posts[i].post_id) {
                userPosts.push(posts[i]);
            }
        }
        return [post, userPosts];
    }
}