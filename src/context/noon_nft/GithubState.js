import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users
  const SearchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `http://localhost:8000/users/v1/user_details/${text}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.data,
    });
  };

  // Get user
  const GetUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `http://localhost:8000/users/v1/user_details/${username}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data.data[0],
    });
  };

  //Get repos
  const GetUserRepos = async (username) => {
    console.log('username: ', username);
    setLoading();

    const baseURL = `https://eth-goerli.alchemyapi.io/nft/v2/NLBTVjwKdvEhLcZW5GG-jUULffsUA4WD/getNFTs/`;
    const ownerAddr = username;

    var config = {
      method: 'get',
      url: `${baseURL}?owner=${ownerAddr}`
    };

    const res = await axios(config);

    console.log(res.data.ownedNfts);

    dispatch({
      type: GET_REPOS,
      payload: res.data.ownedNfts,
    });
  };

  //Clear user
  const ClearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUsers,
        ClearUsers,
        GetUser,
        GetUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
