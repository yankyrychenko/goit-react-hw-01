import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../defaultimage.jpg';
import style from './friend-list.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span
      className={style.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
