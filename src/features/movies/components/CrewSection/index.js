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

export const CrewSection = ({ crew }) => {
  if (!crew || crew.length === 0) return null;

  return (
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
                {profileUrl && <img src={profileUrl} alt={person.name} />}
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
  );
};
