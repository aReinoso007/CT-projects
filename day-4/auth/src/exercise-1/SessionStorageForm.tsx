import React, { useState } from 'react';

const SessionStorageForm: React.FC = () => {
  const [keyInput, setKeyInput] = useState<string>('');
  const [valueInput, setValueInput] = useState<string>('');

  const saveToSessionStorage = () => {
    // Check if key and value are not empty
    if (keyInput && valueInput) {
      // Save to session storage
      sessionStorage.setItem(keyInput, valueInput);

      // Clear input fields
      setKeyInput('');
      setValueInput('');

      // Log success message
      console.log(`Stored: ${keyInput} - ${valueInput}`);
    } else {
      alert('Please enter both key and value.');
    }
  };

  const clearSessionStorage = () => {
    // Clear all data from session storage
    sessionStorage.clear();

    // Log success message
    console.log('Session Storage cleared.');

    // Optionally, you can provide feedback to the user
    alert('Session Storage cleared.');
  };

  return (
    <div>
      <h1>Session Storage Form</h1>

      {/* Form to input key and value */}
      <form>
        <label htmlFor="keyInput">Key:</label>
        <input
          type="text"
          id="keyInput"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          required
        />

        <label htmlFor="valueInput">Value:</label>
        <input
          type="text"
          id="valueInput"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          required
        />

        <button type="button" onClick={saveToSessionStorage}>
          Save to Session Storage
        </button>
      </form>

      {/* Button to delete stored data */}
      <button type="button" onClick={clearSessionStorage}>
        Clear Session Storage
      </button>
    </div>
  );
};

export default SessionStorageForm;
