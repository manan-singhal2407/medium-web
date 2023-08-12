export default class CommentEntity {
    constructor(data) {
        this.user_id = data.user_Detils.id;
        this.user_name = data.user_Detils.username;
        this.user_image = data.user_Detils.profile_pic_url;
        this.comment_id = data.id;
        this.message = data.description;
        this.created_at = data.created_at;
    }
}