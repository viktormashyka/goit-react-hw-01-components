import PropTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FriendsItem, Wrapper } from './FriendList.styled';
import { FriendsList } from './FriendList.styled';

export const Friendlist = ({ friendlist }) => {
  return (
    <Wrapper>
      <FriendsList class="friend-list">
        {friendlist.map(friend => (
          <FriendsItem class="item" key={friend.id}>
            <span class="status">
              {friend.isOnline ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </FriendsItem>
        ))}
      </FriendsList>
    </Wrapper>
  );
};

Friendlist.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
