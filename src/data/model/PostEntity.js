export default class PostEntity {
    constructor(data) {
        const topicsList = [];
        for (const topic of data.topics) {
            topicsList.push(topic.name);
        }
        const topicsData = topicsList.join(',');

        this.user_id = data.user_Detils.id;
        this.user_name = data.user_Detils.username;
        this.user_image = data.user_Detils.profile_pic_url;
        this.post_id = data.id;
        this.title = data.title;
        this.text = 'NA';
        this.image = 'NA';
        this.topics = topicsData;
        this.created_at = data.created_at;
        this.last_updated_at = 'NA';
        this.likes_count = data.likes_count;
        this.comments_count = data.comments_count;
        this.views_count = data.views_count;
        this.time_read = 'NA';
        this.is_user_following = false;
        this.is_user_liked = false;
        this.is_user_bookmark = false;
    }
}