import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <div className={css.itemWrapper}>
      <img src={avatar} alt="Avatar" width="56" height="56" />
      <p className={css.itemName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
