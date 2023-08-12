import PostHomeEntity from "./PostHomeEntity";

export default class ListPostsEntity {
    constructor(data) {
        const postEntities = [];
        for (const post of data.posts) {
            const postEntity = new PostHomeEntity(post.postDetails);
            postEntities.push(postEntity);
        }

        this.id = data.id;
        this.name = data.name;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.posts = postEntities;
        this.is_private = true;
    }
}