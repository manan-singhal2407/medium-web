import PostEntity from "../model/PostEntity";
import ProfileSearchEntity from "../model/ProfileSearchEntity";
import TopicsEntity from "../model/TopicsEntity";

export default class SearchRepositoryImpl {
    async searchPostUsingKeyword(text) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/search-posts?token=${localStorage.getItem('user_token')}&keyword=${text}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const postSearchEntities = [];
                    for (const post of data.postsList) {
                        const postSearchEntity = new PostEntity(post);
                        postSearchEntities.push(postSearchEntity);
                    }

                    return postSearchEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async searchTopicsUsingKeyword(text) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/search-topics?token=${localStorage.getItem('user_token')}&keyword=${text}`, {
                method: 'GET'
            });
            
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const topicsEntites = [];
                    for (const topic of data.topicsList) {
                        const topicsEntity = new TopicsEntity(topic);
                        topicsEntites.push(topicsEntity);
                    }

                    return topicsEntites;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async searchAuthorUsingKeyword(text) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/search-authors?token=${localStorage.getItem('user_token')}&keyword=${text}`, {
                method: 'GET'
            });
            
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const profileSearchEntities = [];
                    for (const profile of data.authorsList) {
                        const profileSearchEntity = new ProfileSearchEntity(profile);
                        profileSearchEntities.push(profileSearchEntity);
                    }

                    return profileSearchEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }
}