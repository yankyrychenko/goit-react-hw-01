import React from 'react';
import PropTypes from 'prop-types';
import style from './profile.module.css';
import defaultImage from '../../defaultimage.jpg';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt={name} width="250" />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.item}>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={style.item}>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className={style.item}>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.protoTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
