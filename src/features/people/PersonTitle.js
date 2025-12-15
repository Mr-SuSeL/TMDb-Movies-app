import { Link } from "react-router-dom";
import { CardRoot, ProfileImageWrapper, Name } from "./styled";
import { ReactComponent as NoProfileIcon } from '../../images/NoProfile.svg';

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const IMAGE_SIZE = "w200";

export default function PersonTitle({ person }) {

    const hasProfileImage = !!person.profile_path;
    const profileImageUrl = hasProfileImage
        ? (person.profile_path.startsWith('http')
            ? person.profile_path
            : `${IMAGES_BASE_URL}${IMAGE_SIZE}${person.profile_path}`)
        : null;

    const detailsPath = `/people/${person.id}`;

    return (
        <Link to={detailsPath} aria-label={`Zobacz szczegóły ${person.name}`}>
            <CardRoot>
                <ProfileImageWrapper>
                    {profileImageUrl ? (
                        <img
                            src={profileImageUrl}
                            alt={person.name}
                        />
                    ) : (
                        <NoProfileIcon />
                    )}
                </ProfileImageWrapper>
                <Name>{person.name}</Name>
            </CardRoot>
        </Link>
    );
}