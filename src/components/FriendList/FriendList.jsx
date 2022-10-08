// import appBar from './AppBar';

import { FriendsItem, Wrapper } from './FriendList.styled';
import { FriendsList } from './FriendList.styled';

export const Friendlist = ({ friendlist }) => {
  return (
    <Wrapper>
      <FriendsList class="friend-list">
        {friendlist.map(friend => (
          <FriendsItem class="item" key={friend.id}>
            <span class="status">{friend.isOnline}</span>
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
