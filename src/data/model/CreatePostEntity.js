export default class CreatePostEntity {
    constructor(data) {
        this.user_id = data.user_id;
        this.user_name = 'NA';
        this.user_image = 'NA';
        this.post_id = data.id;
        this.title = data.title;
        this.text = data.content;
        this.image = data.featured_image;
        this.topics = 'NA';
        this.created_at = data.created_at;
        this.last_updated_at = data.updated_at;
        this.likes_count = data.likes_count;
        this.comments_count = data.comments_count;
        this.views_count = data.views_count;
        this.is_published = data.published;
        this.time_read = 'NA';
        this.is_user_following = false;
        this.is_user_liked = false;
        this.is_user_bookmark = false;
    }
}