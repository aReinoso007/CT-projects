// ItemComponent.tsx
import React, { useReducer, useState } from 'react';
import itemReducer from './ItemReducer';
import Item from './Items';

const ItemComponent: React.FC = () => {
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemName, setItemName] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = { id: Date.now(), name: itemName };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setItemName('');
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemComponent;
