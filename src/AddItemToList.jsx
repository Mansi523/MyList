import React, { useState } from 'react';

const AddItemToList = ({addItem}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
        addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemToList;


// echo "# MyList" >> README.md
// git init
// git add README.md
// git commit -m "first commit"git 
// git branch -M main
// git remote add origin https://github.com/Mansi523/MyList.git
// git push -u origin main