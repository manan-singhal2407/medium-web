import ListPostsEntity from "../model/ListPostsEntity";
import ListsEntity from "../model/ListsEntity";

export default class ListRepositoryImpl {
    async createListWithName(name) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('list_name', name);

        try {
            const response = await fetch(`http://localhost:3000/create-list`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully created the list') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async addPostToList(listId, postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('list_id', listId);
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/add-to-list`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully added to the list!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async deletePostFromList(listId, postId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('list_id', listId);
        formData.append('post_id', postId);

        try {
            const response = await fetch(`http://localhost:3000/remove-from-list`, {
                method: 'DELETE',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully removed from the list!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async getAllLists() {
        try {
            const response = await fetch(`http://localhost:3000/view-all-lists?token=${localStorage.getItem('user_token')}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    const listEntities = [];
                    for (const list of data.lists) {
                        const listEntity = new ListsEntity(list);
                        listEntities.push(listEntity);
                    }

                    return listEntities;
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    async getPostsOfList(listId) {
        try {
            const response = await fetch(`http://localhost:3000/get-list?token=${localStorage.getItem('user_token')}&list_id=${listId}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return new ListPostsEntity(data.list);
                }
            }
            return [];
        } catch (error) {
            return [];
        }
    }
}