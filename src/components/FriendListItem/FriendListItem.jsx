import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FriendsItem } from '../FriendListItem/FriendListItem.styled';

export const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem className="item">
      <span className="status">
        {isOnline ? (
          <AiFillEye style={{ color: 'green' }} />
        ) : (
          <AiFillEyeInvisible style={{ color: 'red' }} />
        )}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItem>
  );
};
