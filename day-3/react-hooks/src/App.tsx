import './App.css';
import UserAuth from './state/UserAuth';
import Counter from './reducer/Counter';

function App() {
  return (
    <div>
      <UserAuth />
      <Counter />
    </div>
  );
}

export default App;
