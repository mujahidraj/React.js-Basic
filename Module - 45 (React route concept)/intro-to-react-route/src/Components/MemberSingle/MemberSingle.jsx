import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const MemberSingle = () => {

  const members = useLoaderData()
  
  const {name , username , email} = members

  const navigate =  useNavigate()
  

  return (
    <div>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <h4>{email}</h4>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
};

export default MemberSingle;