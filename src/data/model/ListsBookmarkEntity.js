export default class ListsBookmarkEntity {
    constructor(posts_count) {
        this.id = -1;
        this.name = 'Reading List';
        this.user_id = 3;
        this.user_name = 'NA';
        this.created_at = 'NA';
        this.updated_at = 'NA';
        this.posts_count = posts_count;
        this.is_private = true;
        this.img1 = '';
        this.img2 = '';
        this.img3 = '';
    }
}