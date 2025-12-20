// src/features/movies/components/MovieHeader/index.js
import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import {
  Wrapper,
  Poster,
  Details,
  Title,
  Meta,
  Overview,
} from "./styled";

export const MovieHeader = ({ movie }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w342${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "";

  const countries = movie.production_countries?.map((c) => c.name).join(", ");

  return (
    <Wrapper>
      {posterUrl && <Poster src={posterUrl} alt={movie.title} />}

      <Details>
        <Title>{movie.title}</Title>
        <Meta>
          {releaseYear}
          {countries && ` • ${countries}`}
        </Meta>
        <Overview>{movie.overview}</Overview>
      </Details>
    </Wrapper>
  );
};
