import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useStore } from "../../constants/hookstore";
import { useFetch } from "../../constants/hooks";

const MovieDetail = () => {
  console.log("this is movie detail");

  const MovieId = useStore();
  //console.log(store);
  console.log(MovieId[0]);

  const movie_id = MovieId[0];
  console.log(movie_id);

  const [data] = useFetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=dc15dc94ad3132023e29552c1fe96161&language=en-US`
  );

  // console.log(data);

  const imagepath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  return (
    <React.Fragment>
      <Link to={ROUTES.LANDING}>
        <h1>Movies</h1>
      </Link>
      <div>
        <img alt={data.original_title} src={imagepath} />
        <p>{data.overview}</p>
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;

// {loading ? (
//     "Loading..."
//   ) : (
//     <ul>
//       {data.map(({ imdb_id, original_title, poster_path }) => (
//         <li key={`photo-${imdb_id}`}>
//           <img alt={original_title} src={poster_path} />
//         </li>
//       ))}
//     </ul>
//   )}
