import PropTypes from 'prop-types';
import {
  Wrapper,
  ProfileCard,
  StatsList,
  CardDescription,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <ProfileCard className="profile">
        <CardDescription className="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar"
            width="100px"
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </CardDescription>

        <StatsList className="stats">
          <StatsItem>
            <span className="label">Followers</span>
            <br />
            <span className="quantity">{followers}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Views</span>
            <br />
            <span className="quantity">{views}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Likes</span>
            <br />
            <span className="quantity">{likes}</span>
          </StatsItem>
        </StatsList>
      </ProfileCard>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
