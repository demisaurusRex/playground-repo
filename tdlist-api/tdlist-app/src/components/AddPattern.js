import { useState } from "react";
// Create a new pattern with description text, name and owner
// Form to house the input for description, name, owner
// Submit button to save and update
// Code for handling save and update (function)
// validation - add without description but name and owner are compulsory

export default function AddPattern() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = name.length > 0;

    if (isValid) {
      setName("");
      setDescription("");
      console.log({ name, description });
    } else {
      alert("Pattern must have name");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Pattern Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Pattern Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit Pattern</button>
      </form>
    </>
  );
}
