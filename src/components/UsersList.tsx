import React from 'react';
import styled from 'styled-components';
import UserBlock from './UserBlock';

const UserListContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 100vh;
`;

function UsersList({ users, remove }) {
  return (
    <UserListContainer>
      <div>
        {users?.map((user) => (
          <UserBlock key={user?.id} userData={user} remove={remove} />
        ))}
      </div>
    </UserListContainer>
  );
}

export default UsersList;
