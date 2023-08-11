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