import { useContext } from 'react';
import RndContext from '../RndContext';


function BullsAndCowsTable(props){
    const rnd = useContext(RndContext);
    
    return (
        <table className="w-2/3 text-lg
        mt-10 mx-auto"> 
            <thead>
                <tr>
                    <th>ניחוש</th>
                    <th>בולים</th>
                    <th>פגיעות</th>
                    <th>ניסיון</th>
                </tr>
            </thead>
            <tbody className="border-solid border-0 border-t border-zinc-300">
                {props.teableValues.map((value, index) => (
                    <tr key={index}>
                        <td>{value.number}</td>
                        <td>{value.bulls}</td>
                        <td>{value.cows}</td>
                        <td>{index + 1}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BullsAndCowsTable;