import React, { useState } from "react";

function App() {
  const [inputFields, setInputFields] = useState([
    { id: 1, index: "", createdAt: Date.now() },
  ]);

  const handleIndexChange = (id, value) => {
    setInputFields(
      inputFields.map((field) =>
        field.id === id ? { ...field, index: value } : field
      )
    );
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      const newItem = {
        id: inputFields.length + 1,
        index: "",
        createdAt: Date.now(),
      };
      setInputFields([...inputFields, newItem]);
    }
  };

  const addToStart = () => {
    const newItem = {
      id: inputFields.length + 1,
      index: "",
      createdAt: Date.now(),
    };
    setInputFields([newItem, ...inputFields]);
  };

  const addToEnd = () => {
    const newItem = {
      id: inputFields.length + 1,
      index: "",
      createdAt: Date.now(),
    };
    setInputFields([...inputFields, newItem]);
  };

  const sortByEarliest = () => {
    const sortedItems = [...inputFields].sort(
      (a, b) => a.createdAt - b.createdAt
    );
    setInputFields(sortedItems);
  };

  const sortByLatest = () => {
    const sortedItems = [...inputFields].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    setInputFields(sortedItems);
  };

  const formatTime = (createdAt) => {
    const time = new Date(createdAt);
    return time.toLocaleTimeString();
  };

  return (
    <div>
      <button onClick={addToStart}>Add to Start</button>
      <button onClick={addToEnd}>Add to End</button>
      <button onClick={sortByEarliest}>Sort by Earliest</button>
      <button onClick={sortByLatest}>Sort by Latest</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {inputFields.map((field) => (
            <tr key={field.id}>
              <td>
                <input
                  type="text"
                  value={field.index}
                  onChange={(e) => handleIndexChange(field.id, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, field.id)}
                />
              </td>
              <td>{field.id}</td>
              <td>{formatTime(field.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
