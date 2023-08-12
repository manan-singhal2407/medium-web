export default class DraftEntity {
    constructor(data) {
        const topicsList = [];
        for (const topic of data.post_details.topics) {
            topicsList.push(topic.name);
        }
        const topicsData = topicsList.join(',');

        this.draft_id = data.id;
        this.created_at = data.created_at;
        this.post_id = data.post_details.id;
        this.title = data.post_details.title;
        this.text = data.post_details.content;
        this.image = 'NA';
        this.topics = topicsData;
        this.likes_count = data.post_details.likes_count;
        this.comments_count = data.post_details.comments_count;
        this.views_count = data.post_details.views_count;
        this.time_read = 'NA';
    }
}