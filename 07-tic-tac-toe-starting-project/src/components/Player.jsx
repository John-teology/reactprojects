import { useState } from 'react';



export default function Player(props) {
    const [isEditing, setisEditing] = useState(false);
    const [playername, setplayername] = useState(props.name);

    function handleEdit() {
        setisEditing((editing) => !editing);
    }

    function handleNameChange(event) {
        setplayername(event.target.value);
    }


    
    return (
        <li>
            {isEditing ? (
                <input type="text" value={playername} required onChange={handleNameChange}/>
            ) : (
                <span className="player-name">{playername}</span>
            )}
            <span className="player-symbol">{props.symbol}</span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );


}