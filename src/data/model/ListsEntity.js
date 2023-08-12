export default class ListsEntity {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.user_id = data.user_id;
        this.user_name = 'NA';
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.posts_count = 0;
        this.is_private = true;
        this.img1 = '';
        this.img2 = '';
        this.img3 = '';
    }
}