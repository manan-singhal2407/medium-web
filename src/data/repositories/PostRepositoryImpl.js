import { dummyPost, returnRandomPosts } from "../dummy/DummyData";
import PostEntity from "../model/PostEntity";

export default class PostRepositoryImpl {
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
        for (let i=0; i<posts.length; i++) {
            if (postId === posts[i].post_id.toString()) {
                post = posts[i];
            }
        }
        for (let i=0; i<posts.length; i++) {
            if (post.user_id === posts[i].user_id && post.post_id !== posts[i].post_id) {
                userPosts.push(posts[i]);
            }
        }
        return [post, userPosts];
    }
}