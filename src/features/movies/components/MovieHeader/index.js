import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import {
  Wrapper,
  Poster,
  Content,
  Title,
  Year,
  InfoSection,
  Label,
  Text,
  Tags,
  Tag,
  RatingSection,
  StarIcon,
  Score,
  MaxScore,
  Votes,
  Overview
} from "./styled";

export const MovieHeader = ({ movie }) => {
  const posterUrl = `${TMDB_CONFIG.IMAGE_BASE_URL}/w500${movie.poster_path}`;

  return (
    <Wrapper>
      <Poster src={posterUrl} alt={movie.title} />
      <Content>
        <Title>{movie.title}</Title>
        <Year>{movie.release_date?.split("-")[0]}</Year>
        
        <InfoSection>
          <Label>Production:</Label>
          <Text>{movie.production_countries?.map(c => c.name).join(", ")}</Text>
        </InfoSection>
        
        <InfoSection>
          <Label>Release date:</Label>
          <Text>{movie.release_date?.split("-").reverse().join(".")}</Text>
        </InfoSection>

        <Tags>
          {movie.genres?.map(genre => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </Tags>

        <RatingSection>
          <StarIcon />
          <Score>{movie.vote_average?.toFixed(1).replace(".", ",")}</Score>
          <MaxScore>/ 10</MaxScore>
          <Votes>{movie.vote_count} votes</Votes>
        </RatingSection>

        <Overview>{movie.overview}</Overview>
      </Content>
    </Wrapper>
  );
};