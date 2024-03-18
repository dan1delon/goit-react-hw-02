import css from './UserStatsItem.module.css';

const UserStatsItem = ({ name, number }) => {
  return (
    <li className={css.statsItem}>
      <span className={css.statsName}>{name}</span>
      <span className={css.statsNumber}>{number}</span>
    </li>
  );
};

export default UserStatsItem;
