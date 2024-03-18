import UserMainInfo from '../UserMainInfo/UserMainInfo';
import UserStats from '../UserStats/UserStats';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <UserMainInfo name={name} tag={tag} location={location} image={image} />

      <UserStats stats={stats} />
    </div>
  );
};

export default Profile;
