export default class PostEntity {
    constructor(data) {
        this.user_id = data.user_id;
        this.user_name = data.user_name;
        this.user_image = data.user_image;
        this.post_id = data.post_id;
        this.title = data.title;
        this.text = data.text;
        this.image = data.image;
        this.topics = data.topics;
        this.created_at = data.created_at;
        this.last_updated_at = data.last_updated_at;
        this.likes_count = data.likes_count;
        this.comments_count = data.comments_count;
        this.views_count = data.views_count;
        this.time_read = data.time_read;
        this.is_user_following = data.is_user_following;
        this.is_user_liked = data.is_user_liked;
        this.is_user_bookmark = data.is_user_bookmark;
    }
}