// Define the state type
interface MyComponentState {
    count: number;
  }
  
  // Define action types
  type MyComponentAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };
  
  // Reducer function
  const myReducer = (state: MyComponentState, action: MyComponentAction): MyComponentState => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

export { myReducer };
export type { MyComponentState, MyComponentAction };
  