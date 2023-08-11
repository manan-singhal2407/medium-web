export default class TopicsEntity {
    constructor(data) {
        this.topic_id = data.id;
        this.topic = data.name;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}