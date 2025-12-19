import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsRequest } from "../../store/slices/moviesSlice";
import { TMDB_CONFIG } from "../../config/api";

import {
  Page,
  HeroWrapper,
  HeroImage,
  ContentSection,
  Poster,
  Details,
  Title,
  Meta,
  Overview,
  Section,
  SectionTitle,
  PeopleGrid,
  PersonCard,
  PersonPhoto,
  PersonInfo,
  PersonName,
  PersonRole,
} from "./styled"; 


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

  const releaseYear = movieDetails.release_date
    ? movieDetails.release_date.split("-")[0]
    : "";

  return (
    <Page>
      {hasHero && heroUrl && (
        <HeroWrapper>
          <HeroImage
            style={{ backgroundImage: `url(${heroUrl})` }}
          />
        </HeroWrapper>
      )}

      <ContentSection>
        {posterUrl && (
          <Poster src={posterUrl} alt={movieDetails.title} />
        )}

        <Details>
          <Title>{movieDetails.title}</Title>
          <Meta>
            {releaseYear}
            {movieDetails.production_countries?.length > 0 &&
              ` • ${movieDetails.production_countries
                .map((c) => c.name)
                .join(", ")}`}
          </Meta>
          <Overview>{movieDetails.overview}</Overview>
        </Details>
      </ContentSection>

      {cast.length > 0 && (
        <Section>
          <SectionTitle>Cast</SectionTitle>
          <PeopleGrid>
            {cast.slice(0, 12).map((person) => {
              const profileUrl = person.profile_path
                ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w185${person.profile_path}`
                : null;

              return (
                <PersonCard
                  key={person.cast_id || person.credit_id}
                >
                  <PersonPhoto>
                    {profileUrl && (
                      <img
                        src={profileUrl}
                        alt={person.name}
                      />
                    )}
                  </PersonPhoto>
                  <PersonInfo>
                    <PersonName>{person.name}</PersonName>
                    <PersonRole>{person.character}</PersonRole>
                  </PersonInfo>
                </PersonCard>
              );
            })}
          </PeopleGrid>
        </Section>
      )}

      {crew.length > 0 && (
        <Section>
          <SectionTitle>Crew</SectionTitle>
          <PeopleGrid>
            {crew.slice(0, 12).map((person) => {
              const profileUrl = person.profile_path
                ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w185${person.profile_path}`
                : null;

              return (
                <PersonCard key={person.credit_id}>
                  <PersonPhoto>
                    {profileUrl && (
                      <img
                        src={profileUrl}
                        alt={person.name}
                      />
                    )}
                  </PersonPhoto>
                  <PersonInfo>
                    <PersonName>{person.name}</PersonName>
                    <PersonRole>{person.job}</PersonRole>
                  </PersonInfo>
                </PersonCard>
              );
            })}
          </PeopleGrid>
        </Section>
      )}
    </Page>
  );
}

export default MovieDetails;
