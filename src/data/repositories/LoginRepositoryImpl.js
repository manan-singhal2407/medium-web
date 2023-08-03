import LoginRepository from '../../domain/repositories/LoginRepository.js';

export default class LoginRepositoryImpl extends LoginRepository {
    async loginUserWithEmailAndPassword(emailId, password) {
        console.log(emailId + " - " + password);
        // const response = await fetch(`https://www.omdbapi.com/?apikey=f1140859&s=${text}&page=${page}&y=${year}`);
        // let movies = [];
        // if (response.status === 200) {
        //     const data = await response.json();
        //     if (data.Response === 'True') {
        //         for (const movie of data.Search) {
        //             movies.push(new Movie(movie));
        //         }
        //     }
        // } else {
        //     alert("Request failed with status code: " + response.status);
        // }
        // return movies;
    }
}