import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from '../SingleUser/SingleUser';

const UserDetails = () => {
  const users = useLoaderData()
  

   
  
  return (
    <div>
      {
        users.map(single=><SingleUser single={single}></SingleUser>)
      }
    </div>
  );
};

export default UserDetails;<h2>
I am user Details</h2>