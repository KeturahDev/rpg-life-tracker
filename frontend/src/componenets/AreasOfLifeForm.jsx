import React, { useState } from "react";

const AreasOfLifeForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = (e) => {
    e.preventDefault();
    if (!categories.includes(inputValue)) {
      setCategories((prev) => [...prev, inputValue]);
    }
    setInputValue("");
  };

  const removeCategory = (category) => {
    setCategories((prev) => prev.filter((cat) => cat !== category));
  };

  console.log(categories);
  return (
    <div>
      <h2>Areas of Life</h2>
      <p className="prompt">
        Input the areas of life that you want to track for your character
      </p>

      <form onSubmit={addCategory}>
        <input
          type="text"
          placeholder="Social Life"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            {cat}
            <button onClick={() => removeCategory(cat)}>x</button>
          </li>
        ))}
      </ul>

      <button className="save">Save</button>
    </div>
  );
};

export default AreasOfLifeForm;
