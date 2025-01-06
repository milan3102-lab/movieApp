import MovieCard from "./Moviecard";
import {movies} from "./moviesdata"

function MovieList(props){
    
        // const {id,title,plot,price,rating,stars,fav,cart,poster}=this.state.movies;
        const {movies,addStars,decStars,toggleFav,toggleCart}=props;
        return(
            <>

            {movies.map((movie)=><MovieCard movies={movie} 
                                            addStars={addStars}
                                            decStars={decStars}
                                            toggleCart={toggleCart}
                                            toggleFav={toggleFav}
                                            key={movie.id}/>)}

            
            </>

      )
    }


export default MovieList;