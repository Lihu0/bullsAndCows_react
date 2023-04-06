import Buttons from './buttons';
import { useState } from 'react';
import InputContext from './InputContext';

function Input(){
    const [input, setInput] = useState('');

    return (
        <InputContext.Provider value={{ setInput, input }}>
            <input
             type="number"
             min="1234"
             max="9876"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="מספר"
             className="border-solid border border-black rounded placeholder:text-right"/>
            <br />
            <Buttons />
        </InputContext.Provider>
    )
}

export default Input;