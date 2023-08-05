export default class ProfileEntity {
    constructor(data) {
        this.user_id = data.user_id;
        this.user_name = data.user_name;
        this.user_image = data.user_image;
        this.bio = data.bio;
        this.post_count = data.post_count;
        this.created_at = data.created_at;
        this.followers_count = data.followers_count;
        this.following_count = data.following_count;
        this.lists_count = data.lists_count;
        this.draft_count = data.draft_count;
        this.is_user_following = data.is_user_following;
    }
}