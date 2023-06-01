import './App.css';
import { useState } from 'react';

function App(){
    let [count, setCount]=useState(0);

    const handleClick=event=>{
        let id=event.currentTarget.id;
        setCount(count+1);
        if(count%2==0)
        document.getElementById(id).textContent="X";
        else
        document.getElementById(id).textContent="O";
    }

    return (
        <div>
            <table>
                <tr>
                    <td id="1" className="cell" onClick={handleClick}>       </td>
                    <td id="2" className="cell" onClick={handleClick}>       </td>
                    <td id="3" className="cell" onClick={handleClick}>       </td>
                </tr>
                <tr>
                    <td id="4" className="cell" onClick={handleClick}>       </td>
                    <td id="5" className="cell" onClick={handleClick}>       </td>
                    <td id="6" className="cell" onClick={handleClick}>       </td>
                </tr>
                <tr>
                    <td id="7" className="cell" onClick={handleClick}>       </td>
                    <td id="8" className="cell" onClick={handleClick}>       </td>
                    <td id="9" className="cell" onClick={handleClick}>       </td>
                </tr>
            </table>
        </div>
    );
}

export default App;