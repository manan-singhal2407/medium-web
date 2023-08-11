export default class ProfileSearchEntity {
    constructor(data) {
        this.user_id = data.id;
        this.user_name = data.username;
        this.user_image = data.profile_pic_url;
        this.bio = 'NA';
        this.post_count = 0;
        this.created_at = 'NA';
        this.followers_count = data.followers_count;
        this.following_count = 0;
        this.lists_count = 0;
        this.draft_count = 0;
        this.is_user_following = false;
    }
}