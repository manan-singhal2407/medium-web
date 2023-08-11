export default class AuthRepositoryImpl {
    async signupUserWithEmailAndPassword(name, email, password) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        try {
            const response = await fetch('http://127.0.0.1:3000/sign-up', {
                method: 'POST',
                body: formData
            });
            
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    localStorage.setItem('user_token', data.userDetails.token);
                    localStorage.setItem('user_id', data.userDetails.id);
                    localStorage.setItem('user_name', data.userDetails.username);
                    return "SUCCESS";
                } else {
                    return data.msg;
                }
            } else {
                return "Something Went Wrong";
            }
        } catch (error) {
            return "Something Went Wrong";
        }
    }

    async loginUserWithEmailAndPassword(email, password) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        try {
            const response = await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                body: formData
            });
            
            if (response.status === 200) {
                const data = await response.json();
                if (data.status === 200) {
                    localStorage.setItem('user_token', data.userDetails.token);
                    localStorage.setItem('user_id', data.userDetails.id);
                    localStorage.setItem('user_name', data.userDetails.username);
                    return "SUCCESS";
                } else {
                    return data.msg;
                }
            } else {
                return "Something Went Wrong";
            }
        } catch (error) {
            return "Something Went Wrong";
        }
    }
}