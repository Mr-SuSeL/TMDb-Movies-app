import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./components/MovieCard";
import { MoviesGrid, MovieTileLink } from "./components/MoviesGrid/styled";
import { Pagination } from "../../common/Pagination";
import { fetchPopularMoviesRequest } from "../../store/slices/moviesSlice";
import { Page } from "./styled";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults"; // Upewnij się, że stworzyłeś ten komponent
import { useQueryParameter } from "../../features/search/queryParameters";

function PopularMovies() {
  const dispatch = useDispatch();
  const query = useQueryParameter("search");

  const { popularMovies, loading, error, page, totalPages, totalResults } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    // Resetujemy stronę do 1, jeśli użytkownik wpisuje nową frazę (query)
    // Jeśli nie ma query, używamy obecnej strony z Reduxa
    const pageToFetch = query ? 1 : page;

    dispatch(fetchPopularMoviesRequest({ page: pageToFetch, query: query }));
  }, [dispatch, query, page]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    dispatch(fetchPopularMoviesRequest({ page: newPage, query: query }));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  // Obsługa braku wyników wyszukiwania
  if (!loading && query && popularMovies.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <Page>
      <h2>
        {query 
          ? `Search results for "${query}" (${totalResults})` 
          : "Popular Movies"}
      </h2>
      
      <MoviesGrid>
        {popularMovies.map((movie) => (
          <MovieTileLink key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </MovieTileLink>
        ))}
      </MoviesGrid>

      {popularMovies.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Page>
  );
}

export default PopularMovies;