import './App.css';
import UserAuth from './state/UserAuth';
import Counter from './reducer/Counter';
import MyComponent from './reducer/Reducer';
import ParentComponent from './callbacks/Parent';
import StateCounter from './state-vid/StateCounter';
import ItemComponent from './reducer-vid/ItemComponent';

function App() {
  return (
    <div>
      <UserAuth />
      <Counter />
      <MyComponent />
      <ParentComponent />
      <StateCounter/>
      <ItemComponent />
    </div>
  );
}

export default App;
