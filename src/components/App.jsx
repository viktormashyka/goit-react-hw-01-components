import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { Friendlist } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <Statistics statistics={data} />
      <Friendlist friendlist={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
