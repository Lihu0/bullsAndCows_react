import { AiOutlineEnter } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useContext } from 'react';
import bullsAndCowsCounter from '../scripts/bullsAndCowsCounter';
import InputContext from './InputContext';
import RndContext from '../RndContext';
import ValuesContext from '../ValuesContext';


function Buttons(props){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const inputContext = useContext(InputContext);
    const { tableValues, setTableValues } = useContext(ValuesContext);

    const rnd = useContext(RndContext);

    // a function that changes the input value by concatenation of the input value and the number that was clicked
    const changeInput = (number) => {
        inputContext.setInput(inputContext.input + number);
    }
    // a function that deletes the last digit of the input value
    const delLastDigitofInput = () => {
        inputContext.setInput(inputContext.input.slice(0, -1));
    }
    // a function that deletes all the digits of the input value
    const delAllDigitsofInput = () => {
        inputContext.setInput('');
    }
    // a function that checks if the input value is valid and if it is, it adds it to the table values
    const enterNumber = () => {
        const inputSet = new Set(inputContext.input);
        // check if number starts with 0
        if (inputContext.input.startsWith('0')) {
            alert('אין להזין מספרים שמתחילים באפס');
            inputContext.setInput('');
            return;
        }
        // check if number is 4 digits long
        if (inputContext.input.length !== 4) {
            alert('אנא הזן מספר באורך 4 ספרות');
            inputContext.setInput('');
            return;
        }
        // check if number has 4 different digits
        if (inputSet.size !== inputContext.input.length) {
            alert('אין להזין מספרים עם ספרות זהות');
            inputContext.setInput('');
            return;
        }
        
        // add the input value to the table values
        setTableValues([...tableValues, {number: inputContext.input, bulls: bullsAndCowsCounter(rnd, inputContext.input).bulls, cows: bullsAndCowsCounter(rnd, inputContext.input).cows}]);
        inputContext.setInput('');
        // check if the input value is the random number
        if (bullsAndCowsCounter(rnd, inputContext.input).bulls === 4) {
            // if it is, alert the user that he won and how many tries it took him
            alert(`כל הכבוד הצלחת ב ${tableValues.length + 1} ניסיונות`);
        }
    }

    return (
        <>
            <div className="inline-grid grid-cols-3">
                {numbers.map((number) =>
                    <button className="btn" key={number} title={number} onClick={()=> changeInput(number)}>
                        {number}
                    </button>
                )}
                <button 
                className="btn"
                onClick={() => enterNumber()}
                title="הזן את המספר">
                    <AiOutlineEnter className="inline-block" />
                </button>
                
                <button
                className="btn" 
                onClick={() => delLastDigitofInput()}
                onDoubleClick={() => {delAllDigitsofInput()}}
                title="מחק">
                    <RiDeleteBack2Line className="inline-block"/>
                </button>
            </div>
        </>
    )
}

export default Buttons;