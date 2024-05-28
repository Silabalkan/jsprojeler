class movieAPI{
    constructor(){
        this.apiKey="5eb9b5d9e299ba46d9f4f82dbf25737f";
        this.baseImageURL = "https://image.tmdb.org/t/p/w1280/";
        this.popularURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=tr-TR&sort_by=popularity.desc`;
        this.moviesCap=document.querySelector(".movies");
        this.searchURL=`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
    }

   async getPopularMovies(){
        const response =await fetch(this.popularURL);
        const movies = await response.json();
        console.log(movies);
       this.displayMovies(movies);
    }

    async getMovieByName(movieName){
        const response = await  fetch(this.searchURL+movieName);
        const movies = await response.json();
       // this.displayMovies(movies);
       if(!movies==""){
        this.displayMovies(movies);
       }else{
        console.log("bulunamadı");
       }
       
    }

    displayMovies(movies){
        this.moviesCap.innerHTML="";
        movies.results.forEach(movie=>{
            this.moviesCap.innerHTML+=
            `<div class="movie">
              <img  src="${this.baseImageURL}${movie.poster_path}" alt="" class="moviePicture" width="230" height="345">
               <div class="info">
                 <h4 class="movieName">${movie.title}</h4>
                 <h5 class="movieImbd">${Math.round(movie.vote_average)}</h5>
                </div>
            </div>`;
            console.log(movie);
            
        })
        
            
       
    }
}