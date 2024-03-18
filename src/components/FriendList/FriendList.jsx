import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.friendListItem}>
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
