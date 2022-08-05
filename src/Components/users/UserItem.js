import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { id, name, profile_pic, wallet_address } }) => {
  return (
    <div className='card text-center'>
      <img
        src={profile_pic}
        alt='avatar'
        className='round-img'
        style={{ width: '150px' }}
      />
      <h3>Name: {name} </h3>
      <h3>Wallet Address: {wallet_address} </h3>
      <div>
        <Link to={`/user/${id}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
