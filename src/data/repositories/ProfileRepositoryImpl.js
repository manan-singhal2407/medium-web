import { dummyPost, dummyProfile } from "../dummy/DummyData";
import PostEntity from "../model/PostEntity";
import ProfileEntity from "../model/ProfileEntity";

export default class ProfileRepositoryImpl {
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