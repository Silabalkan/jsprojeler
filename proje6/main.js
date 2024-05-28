const form=document.querySelector("#filmBul");
const searchInput=document.querySelector("#searchİnput");
const movieApi=new movieAPI();
runEventListener();

function runEventListener(){
    document.addEventListener("DOMContentLoaded",movieApi.getPopularMovies());
    form.addEventListener("submit",getMovieByName);
}

function getMovieByName(e){
  
        movieName=searchInput.value.trim();
        movieApi.getMovieByName(movieName);
    
    e.preventDefault();
}


