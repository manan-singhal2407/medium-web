export default class HomeRepositoryImpl {
    async fetchHomePageInfoForUser() {
        const userId = localStorage.getItem("user_id");
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