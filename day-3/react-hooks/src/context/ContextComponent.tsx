// ContextComponent.tsx
import React from 'react';
import { useMyContext } from './MyContext';

const ContextComponent: React.FC = () => {
  const { userId, username, updateUser } = useMyContext();

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Username: {username}</p>
      <button onClick={() => updateUser(2, 'Jane Doe')}>Update User</button>
    </div>
  );
};

export default ContextComponent;
