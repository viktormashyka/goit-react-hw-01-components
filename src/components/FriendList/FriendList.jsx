import PropTypes from 'prop-types';
import { Wrapper, FriendsList } from './FriendList.styled';
import { FriendlistItem } from 'components/FriendListItem/FriendListItem';

export const Friendlist = ({ friendlist }) => {
  return (
    <Wrapper>
      <FriendsList className="friend-list">
        {friendlist.map(friend => (
          <FriendlistItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </FriendsList>
    </Wrapper>
  );
};

Friendlist.propTypes = {
  friendlist: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
