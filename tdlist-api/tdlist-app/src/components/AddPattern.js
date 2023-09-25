// Create a new pattern with description text, name and owner
// Form to house the input for description, name, owner
// Submit button to save and update
// Code for handling save and update (function)
// validation - add without description but name and owner are compulsory

export default function AddPattern() {
  return (
    <>
      <form>
        <label>Pattern Name</label>
        <input type="text" />
        <label>Pattern Description</label>
        <input type="text" />
      </form>
    </>
  );
}
