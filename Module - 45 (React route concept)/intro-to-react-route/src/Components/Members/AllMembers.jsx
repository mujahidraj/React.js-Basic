import React from 'react';
import { useLoaderData } from 'react-router';
import MemberDetailsmany from '../MembersDetailsMany/MemberDetailsmany';


const AllMembers = () => {

const members=  useLoaderData()


  
  return (
    <div>
      {members.map(members=><MemberDetailsmany members={members}></MemberDetailsmany>)}
    </div>
  );
};

export default AllMembers;