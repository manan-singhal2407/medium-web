import ProfileEntity from "../model/ProfileEntity";

export default class ProfileRepositoryImpl {
    async getProfileInfoById(userId) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/get-profile?token=${localStorage.getItem('user_token')}&user_id=${userId}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    return [true, new ProfileEntity(data.profile)];
                }
            }
            return [false, null];
        } catch (error) {
            return [false, null];
        }
    }

    async uploadUserProfile(name, bio, file) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('username', name);
        formData.append('about', bio);
        formData.append('profile_pic', file);

        localStorage.setItem('user_name', name);
        try {
            const response = await fetch(`http://127.0.0.1:3000/edit-user-details`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'User details are successfully updated!') {
                        return true;
                    }
                }
                console.log(data.msg);
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async followUser(userId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('author_id', userId);

        try {
            const response = await fetch(`http://localhost:3000/follow-user`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully followed!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async unfollowUser(userId) {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('user_token'));
        formData.append('author_id', userId);

        try {
            const response = await fetch(`http://localhost:3000/unfollow-user`, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    if (data.msg === 'Successfully unfollowed!') {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }
}