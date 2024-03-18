import css from './UserStats.module.css';
import UserStatsItem from '../UserStatsItem/UserStatsItem';

const UserStats = ({ stats }) => {
  return (
    <ul className={css.statsList}>
      <UserStatsItem name="Followers" number={stats.followers} />
      <UserStatsItem name="Views" number={stats.views} />
      <UserStatsItem name="Likes" number={stats.likes} />
    </ul>
  );
};

export default UserStats;
