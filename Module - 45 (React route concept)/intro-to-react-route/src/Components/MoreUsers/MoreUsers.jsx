import React, { use } from 'react';

const MoreUsers = ({userFetch}) => {

  const UserDetails =  use(userFetch)

  console.log(UserDetails);
  

  return (
    <div>
      <h3>My name is more users</h3>
    </div>
  );
};

export default MoreUsers;