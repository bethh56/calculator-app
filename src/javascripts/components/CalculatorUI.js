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

            <div className="input-group mb-3">
                <div className="input-group mb-3">
                    <input className="inputStyle" value={current} aria-describedby="button-addon1"/>
                    <button className="calc-btn" type="button" id="button-addon1" onClick={() => setCurrent("")}>AC</button>
                </div>
            </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('( ')}>(</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' )')}>)</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('%')}>%</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('**')}>^</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => setCurrent(current.substr(0, current.length - 1))}>
                            <i className="fa-solid fa-delete-left"></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(7)}>7</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(8)}>8</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(9)}>9</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('/')}>/</button>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(4)}>4</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(5)}>5</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(6)}>6</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('*')}>x</button>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(1)}>1</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(2)}>2</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(3)}>3</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('-')}>-</button>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(0)}>0</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert(".")}>.</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => setCurrent(eval(current))}>=</button>
                    </div>
                    <div className="col">
                        <button type="button" className="calc-btn" onClick={() => insert('+')}>+</button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>);
  }

  
  export default CalculatorUI;