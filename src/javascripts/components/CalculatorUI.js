import './calculatorUI.scss';
import React, { useState } from 'react';

const CalculatorUI = () => {
        let [current, setCurrent] = useState("");

        const insert = (choice) => {
            setCurrent(""+current+choice)
        }

        return (
            <div className='calDiv'>
            <div className='calculationField'>
                <div className='inputField'>
                    <input className='input' value={current}/>
                </div>
            </div>
            <div className="calculator">
                <table>
                    <tbody>
                        <tr>
                                <td><button type="button" className="calc-btn" onClick={() => insert('( ')}>(</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(' )')}>)</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert('% ')}>%</button></td>
                                <button type="button" className="calc-btn" onClick={() => setCurrent(current.substr(0, current.length - 1))}>
                                    <i className="fa-solid fa-delete-left"></i>
                                </button>
                                <button type="button" className="calc-btn" onClick={() => setCurrent("")}>AC</button>
                        </tr>
                        <tr>
                                <td><button type="button" className="calc-btn" onClick={() => insert(7)}>7</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(8)}>8</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(9)}>9</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(' / ')}>/</button></td>
                        </tr>
                        <tr>
                                <td><button type="button" className="calc-btn" onClick={() => insert(4)}>4</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(5)}>5</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(6)}>6</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(' * ')}>x</button></td>
                        </tr>
                        <tr>
                                <td><button type="button" className="calc-btn" onClick={() => insert(1)}>1</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(2)}>2</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(3)}>3</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(' - ')}>-</button></td>
                        </tr>
                        <tr>
                                <td><button type="button" className="calc-btn" onClick={() => insert(0)}>0</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert('.')}>.</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => setCurrent(eval(current))}>=</button></td>
                                <td><button type="button" className="calc-btn" onClick={() => insert(' + ')}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
  }

  
  export default CalculatorUI;