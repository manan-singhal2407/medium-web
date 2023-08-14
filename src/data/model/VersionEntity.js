export default class VersionEntity {
    constructor(data) {
        this.version_id = data.version_id;
        this.version = data.version;
        this.title = data.title;
        this.content = data.content;
        this.post_id = data.post_id;
        this.image = data.featured_image;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.is_published = data.published === null ? false : data.published;
    }
}