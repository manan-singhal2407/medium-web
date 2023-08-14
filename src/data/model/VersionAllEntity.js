export default class VersionAllEntity {
    constructor(data) {
        this.version = data.version;
        this.title = data.title;
        this.image = data.featured_image;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.is_published = data.published === null ? false : data.published;
    }
}