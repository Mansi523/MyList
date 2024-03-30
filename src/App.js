import React, { useState } from 'react';
import AddItemToList from './AddItemToList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <AddItemToList addItem={addItem} />
    </div>
  );
};

export default App;