export default class AuthRepositoryImpl {
    async signupUserWithEmailAndPassword(name, email, password) {
        const userData = {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: password
            }
        };
        try {
            const response = await fetch('http://127.0.0.1:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (response.status === 201) {
                return "success";
            } else if (response.status === 422) {
                return "This email account has been already in use";
            } else {
                return "Something Went Wrong";
            }
        } catch (error) {
            return "Something Went Wrong";
        }
    }

    async loginUserWithEmailAndPassword(email, password) {
        const userData = {
            email: email,
            password: password,
        };
        try {
            const response = await fetch('http://127.0.0.1:3000/sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('user_id', data.data.id);
                localStorage.setItem('user_name', data.data.name);
                return "success";
            } else if (response.status === 422) {
                return "Invalid email or password";
            } else {
                return "Something Went Wrong";
            }
        } catch (error) {
            return "Something Went Wrong";
        }
    }
}