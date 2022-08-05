import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}> {repo.title} </a><hr />
        <a href={repo.html_url}> {JSON.stringify(repo.metadata)} </a>
        <img alt="collectible link" src={repo.media[0].gateway} ></img>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default ReposItem;
