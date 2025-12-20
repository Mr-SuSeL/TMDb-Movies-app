import React from "react";
import { TMDB_CONFIG } from "../../../../config/api";
import {
  Section,
  SectionTitle,
  PeopleGrid,
  PersonCard,
  PersonPhoto,
  PersonInfo,
  PersonName,
  PersonRole,
} from "./styled";

export const CastSection = ({ cast }) => {
  if (!cast || cast.length === 0) return null;

  return (
    <Section>
      <SectionTitle>Cast</SectionTitle>
      <PeopleGrid>
        {cast.slice(0, 12).map((person) => {
          const profileUrl = person.profile_path
            ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w185${person.profile_path}`
            : null;

          return (
            <PersonCard key={person.cast_id || person.credit_id}>
              <PersonPhoto>
                {profileUrl && <img src={profileUrl} alt={person.name} />}
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
  );
};
