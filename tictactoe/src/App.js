import './App.css';
import { useState } from 'react';

function App(){
    let [count, setCount]=useState(0);

    const handleClick=event=>{
        let id=event.currentTarget.id;
        setCount(count+1);
        if(count%2===0)
        document.getElementById(id).textContent="X";
        else
        document.getElementById(id).textContent="O";

        // Recording moves
        

        //record win
        let result=CheckWin();
        if(result!=null)
        {
            document.write(result+" wins");
        }
    }

    const CheckWin=()=>{
        // horizontal
        for(let i=1;i<=7;i+=3)
        {
            let a=document.getElementById(i).textContent;
            let b=document.getElementById(i+1).textContent;
            let c=document.getElementById(i+2).textContent;
            if(a!==""&&(a===b)&&a===c)
            {
                return(a);
            }
        }
        // Vertical
        for(let i=1;i<=3;i++)
        {
            let a=document.getElementById(i).textContent;
            let b=document.getElementById(i+3).textContent;
            let c=document.getElementById(i+6).textContent;
            if(a!==""&&(a===b)&&a===c)
            {
                return(a);
            }
        }
        // diagonal
        let a=document.getElementById(1).textContent;
        let b=document.getElementById(5).textContent;
        let c=document.getElementById(9).textContent;
        if(a!==""&&(a===b)&&a===c)
        {
            return(a);
        }
        a=document.getElementById(3).textContent;
        b=document.getElementById(5).textContent;
        c=document.getElementById(7).textContent;
        if(a!==""&&(a===b)&&a===c)
        {
            return(a);
        }
        return(null);
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td id="1" className="cell" onClick={handleClick}></td>
                        <td id="2" className="cell" onClick={handleClick}></td>
                        <td id="3" className="cell" onClick={handleClick}></td>
                    </tr>
                    <tr>
                        <td id="4" className="cell" onClick={handleClick}></td>
                        <td id="5" className="cell" onClick={handleClick}></td>
                        <td id="6" className="cell" onClick={handleClick}></td>
                    </tr>
                    <tr>
                        <td id="7" className="cell" onClick={handleClick}></td>
                        <td id="8" className="cell" onClick={handleClick}></td>
                        <td id="9" className="cell" onClick={handleClick}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;