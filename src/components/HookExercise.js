import React, { useState } from "react";
import '../App.css'
const Counter = () => {
    let [count, setCount] = useState(0);
    let [error, setError] = useState('');
    const handleClickInc = () => {
        setCount(count + 1);
        setError('');
    };
    const handleClickDec = () => {
        if (count) {
            setCount(count - 1);
            setError('');
        } else {
            setError('Already reached Zero !!!');
        }
    };
    return (
        <React.Fragment>
            <button className="clickBtn" style={{ background: 'green' }} onClick={handleClickInc}>Click to Add</button>
            <span className="countBlock" style={{ color: error ? 'yellow ' : '' }} ><b>{count}</b></span>
            <button className="clickBtn" style={{ background: 'purple', cursor: error ? 'no-drop' : '' }} disabled={error ? true : false} onClick={handleClickDec}>Click to Subtract</button>
            <div className="erroeDiv" >{error ? error : ''}</div>
        </React.Fragment>
    );
};

export default Counter;
