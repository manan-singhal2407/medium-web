import CommentEntity from "./CommentEntity";

export default class PostByIdEntity {
    constructor(data) {
        const topicsList = [];
        for (const topic of data.topics) {
            topicsList.push(topic.name);
        }
        const topicsData = topicsList.join(',');

        const commentList = [];
        for (const comment of data.comments) {
            commentList.push(new CommentEntity(comment));
        }

        this.user_id = data.user_id;
        this.user_name = 'NA';
        this.user_image = 'NA';
        this.post_id = data.id;
        this.title = data.title;
        this.text = data.content;
        this.image = 'NA';
        this.topics = topicsData;
        this.created_at = data.created_at;
        this.last_updated_at = 'NA';
        this.likes_count = data.likes_count;
        this.comments_count = data.comments_count;
        this.commentList = commentList;
        this.views_count = data.views_count;
        this.time_read = `${data.readingMinutes} min`;
        this.is_user_following = false;
        this.is_user_liked = false;
        this.is_user_bookmark = false;
    }
}