export default class PostTopicEntity {
    constructor(data) {
        this.post_id = data.post_id;
        this.topic_id = data.topic_id;
        this.topic_name = data.topic_name;
        this.created_at = data.created_at;
    }
}