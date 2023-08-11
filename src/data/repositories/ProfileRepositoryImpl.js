import { dummyPost, dummyProfile } from "../dummy/DummyData";
import PostEntity from "../model/PostEntity";
import ProfileEntity from "../model/ProfileEntity";

export default class ProfileRepositoryImpl {
    async followUser(userId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('author_id', userId);

        try {
            const response = await fetch(`http://localhost:3000/follow-user`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully followed!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async unfollowUser(userId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('author_id', userId);

        try {
            const response = await fetch(`http://localhost:3000/unfollow-user`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully followed!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    getProfileById(profileId) {
        const posts = dummyPost.map(data => new PostEntity(data));
        const profiles = dummyProfile.map(data => new ProfileEntity(data));
        let userProfile = null;
        let userPosts = [];
        for (let i=0; i<profiles.length; i++) {
            if (profileId === profiles[i].user_id.toString()) {
                userProfile = profiles[i];
            }
        }
        for (let i=0; i<posts.length; i++) {
            if (userProfile.user_id === posts[i].user_id) {
                userPosts.push(posts[i]);
            }
        }
        return [userProfile, userPosts];
    }
}