import { returnRandomPosts, returnRandomTopics } from "../dummy/DummyData";
import PostEntity from "../model/PostEntity";

export default class HomeRepositoryImpl {
    fetchHomePageInfoForUser() {
        const userId = localStorage.getItem("user_id");
        if (userId === undefined || userId === null) {
            userId = '';
        }

        const trending = returnRandomPosts(6).map(data => new PostEntity(data));
        const recommended = returnRandomPosts(10).map(data => new PostEntity(data));
        const topics = returnRandomTopics(10);
        return [trending, recommended, topics];
    }

    fetchMoreRecommendedPostForUser() {
        const userId = localStorage.getItem("user_id");
        if (userId === undefined || userId === null) {
            userId = '';
        }

        const recommended = returnRandomPosts(10).map(data => new PostEntity(data));
        return recommended;
    }
}