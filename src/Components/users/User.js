import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/noon_nft/githubContext';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { GetUser, user, loading, GetUserRepos, repos } = githubContext;
  console.log('user: ', user);
  useEffect(() => {
    GetUser(match.params.id);
    GetUserRepos(user.wallet_address);
    
    //eslint-disable-next-line
  }, []);

  const {
    name,
    wallet_address,
    profile_pic,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={profile_pic}
            alt='avatar'
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>Name: {name}</h1>
          <p>Wallet Address: {wallet_address}</p>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
