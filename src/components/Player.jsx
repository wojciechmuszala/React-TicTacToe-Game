import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    
  };

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input type='text' value={playerName} onChange={handleChange} />
        ) : (
          <span className='player-name'>{playerName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
