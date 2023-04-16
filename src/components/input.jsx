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
             className="dark:bg-slate-800 border-solid border border-black dark:border-white rounded placeholder:text-right dark:placeholder:text-gray-200"/>
            <br />
            <Buttons />
        </InputContext.Provider>
    )
}

export default Input;