import React from 'react';
import { Link, useNavigate } from 'react-router';

const MemberDetailsmany = ({members}) => {

  const {id, name , username , email}   = members

  const navigate = useNavigate()



  return (
    <div>
      <h2>{name}</h2>
      <h2>{username}</h2>
      <h2>{email}</h2>

     <Link to={`/AllMembers/${id}`}>View Details</Link>
     <button onClick={()=>navigate(`/AllMembers/${id}`)}>More details</button>
    </div>
  );
};

export default MemberDetailsmany;