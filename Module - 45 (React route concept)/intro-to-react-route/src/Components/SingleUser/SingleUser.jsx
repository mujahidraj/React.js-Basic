import React from 'react';
import { Link } from 'react-router';

const SingleUser = ({single}) => {
  const {id} = single
  return (
    <div>
      <h2>{single.name}</h2>
      <Link to={`${id}`}>Details</Link>
    </div>
  );
};

export default SingleUser;