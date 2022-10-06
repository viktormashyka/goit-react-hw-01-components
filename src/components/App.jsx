import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { Friendlist } from './FriendList/FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <Statistics statistic={data} />
      <Friendlist friendlist={friends} />
    </div>
  );
};

console.log(data);
