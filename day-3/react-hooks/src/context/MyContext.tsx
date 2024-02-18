// MyContext.ts
import { createContext, useContext } from 'react';

interface MyContextValue {
  // Define your context properties and their types
  userId: number;
  username: string;
  updateUser: (id: number, name: string) => void;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export default MyContext;
