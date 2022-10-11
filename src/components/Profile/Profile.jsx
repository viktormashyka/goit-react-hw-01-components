import PropTypes from 'prop-types';
import { Wrapper } from './Profile.styled';
import { ProfileCard } from './Profile.styled';
import { StatsList } from './Profile.styled';
import { CardDescription } from './Profile.styled';
import { StatsItem } from './Profile.styled';

export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <ProfileCard class="profile">
        <CardDescription class="description">
          <img src={avatar} alt="User avatar" class="avatar" width="100px" />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </CardDescription>

        <StatsList class="stats">
          <StatsItem>
            <span class="label">Followers</span>
            <br />
            <span class="quantity">{followers}</span>
          </StatsItem>
          <StatsItem>
            <span class="label">Views</span>
            <br />
            <span class="quantity">{views}</span>
          </StatsItem>
          <StatsItem>
            <span class="label">Likes</span>
            <br />
            <span class="quantity">{likes}</span>
          </StatsItem>
        </StatsList>
      </ProfileCard>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
    likes: PropTypes.number,
};
