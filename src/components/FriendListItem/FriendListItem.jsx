// import PropTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Wrapper,
  FriendsList,
  FriendsItem,
} from '../FriendListItem/FriendListItem.styled';

export const FriendlistItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem class="item" key={id}>
      <span class="status">
        {isOnline ? (
          <AiFillEye style={{ color: 'green' }} />
        ) : (
          <AiFillEyeInvisible style={{ color: 'red' }} />
        )}
      </span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendsItem>
  );
};
