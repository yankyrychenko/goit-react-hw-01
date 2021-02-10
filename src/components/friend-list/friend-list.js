import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item';
import style from './friend-list.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendlist}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={style.item}>
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
