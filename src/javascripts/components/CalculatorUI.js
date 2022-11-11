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

            <div class="input-group mb-3">
                <div class="input-group mb-3">
                    <input className="inputStyle" value={current} aria-describedby="button-addon1"/>
                    <button className="calc-btn" type="button" id="button-addon1" onClick={() => setCurrent("")}>AC</button>
                </div>
            </div>
            </div>
            <div className="container text-center">
                <div class="row">
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert('( ')}>(</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' )')}>)</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert('% ')}>%</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => setCurrent(current.substr(0, current.length - 1))}>
                            <i className="fa-solid fa-delete-left"></i>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(7)}>7</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(8)}>8</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(9)}>9</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' / ')}>/</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(4)}>4</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(5)}>5</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(6)}>6</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' * ')}>X</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(1)}>1</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(2)}>2</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(3)}>3</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' - ')}>-</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(0)}>7</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(".")}>.</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => setCurrent(eval(current))}>=</button>
                    </div>
                    <div class="col">
                        <button type="button" className="calc-btn" onClick={() => insert(' + ')}>+</button>
                    </div>
                </div>
            </div>
        </div>);
  }

  
  export default CalculatorUI;