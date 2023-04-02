import { user, data, friends, transactions } from 'data';
import { Profile, Statistics, FriendList, TransactionHistory } from 'components';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}

      <h2>1 - Профіль соціальної мережі</h2>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <hr/>

      <h2>2- Секція статистики</h2>

      <Statistics title="Upload stats" stats={data}/>

      <hr/>

      <h2>3 - Список друзів</h2>

      <FriendList friends={friends}/>

      <hr/>

      <h2>4 - Історія транзакцій</h2>

      <TransactionHistory items={transactions}/>
    </div>
  );
};
