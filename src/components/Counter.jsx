import React, {useState} from 'react';
// import Button from './Button';
const Counter = (props) => {
    const [count,setCount]=useState(Number(props.initial));
    const handleChange=(e)=>{
        setCount(Number(e.target.value)+count)
    }
    const handleDouble=()=>{
        setCount(count*2);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button value="1" onClick={handleChange}>Increment</button>
            <button value="-1" onClick={handleChange} >Decrement</button>
            <button onClick={handleDouble}>Double</button>
            {/* <Button per={count} onChangeHappen={handleChange} type="add"/> */}
        </div>
    );
}

export default Counter;
