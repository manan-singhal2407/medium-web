export default class ListBookmarkPostsEntity {
    constructor(data) {
        const topicsList = [];
        for (const topic of data.post_details.topics) {
            topicsList.push(topic.name);
        }
        const topicsData = topicsList.join(',');

        this.id = -1;
        this.list_name = 'Reading List';
        this.user_id = -1;
        this.user_name = 'NA';
        this.user_image = 'NA';
        this.post_id = data.post_details.id;
        this.title = data.post_details.title;
        this.text = 'NA';
        this.image = 'NA';
        this.topics = topicsData;
        this.created_at = data.post_details.created_at;
        this.last_updated_at = 'NA';
        this.likes_count = data.post_details.likes_count;
        this.comments_count = data.post_details.comments_count;
        this.views_count = data.post_details.views_count;
        this.time_read = 'NA';
        this.is_user_following = false;
        this.is_user_liked = false;
        this.is_user_bookmark = false;
    }
}