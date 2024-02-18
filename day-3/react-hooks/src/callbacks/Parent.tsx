import React from 'react';
import ChildComponent from './Child';

const ParentComponent: React.FC = () => {
  const handleChildClick = (message: string) => {
    console.log(`Message from child: ${message}`);
  };

  return (
    <ChildComponent onClick={handleChildClick} />
  );
};
export default ParentComponent;