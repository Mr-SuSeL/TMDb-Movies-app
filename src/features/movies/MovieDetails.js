// src/features/movies/MovieDetails.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsRequest } from "../../store/slices/moviesSlice";
import { TMDB_CONFIG } from "../../config/api";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, movieCredits, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetailsRequest(id));
    }
  }, [dispatch, id]);

  if (loading || !movieDetails) {
    return <p>Ładowanie szczegółów filmu...</p>;
  }

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  const hasHero =
    movieDetails.backdrop_path || movieDetails.poster_path; 

  const posterUrl = movieDetails.poster_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w342${movieDetails.poster_path}`
    : null;

  const heroUrl = movieDetails.backdrop_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w1280${movieDetails.backdrop_path}`
    : posterUrl;

  const cast = movieCredits?.cast || [];
  const crew = movieCredits?.crew || [];

  return (
    <main>
      {hasHero && (
        <section>

          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundImage: `url(${heroUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>
      )}

      <section>

        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.release_date}</p>
        {posterUrl && (
          <img src={posterUrl} alt={movieDetails.title} width={200} />
        )}
        <p>{movieDetails.overview}</p>
      </section>

      {cast.length > 0 && (
        <section>
          <h2>Cast</h2>
          <ul>
            {cast.slice(0, 10).map((person) => (
              <li key={person.cast_id || person.credit_id}>
                {person.name} – {person.character}
              </li>
            ))}
          </ul>
        </section>
      )}

      {crew.length > 0 && (
        <section>
          <h2>Crew</h2>
          <ul>
            {crew.slice(0, 10).map((person) => (
              <li key={person.credit_id}>
                {person.name} – {person.job}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default MovieDetails;
