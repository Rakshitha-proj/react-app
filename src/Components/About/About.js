import {useState} from 'react';
// useState 
function About() {
    // Rules Of Hooks
    // You cannot use Hooks in Class Components 
    // You cannot call hooks condtionally 
    
    const [count,setCount] = useState(0);
    
    const handleIncrement = ()=>{
        setCount(count+1);
        // setCount is used to update count value (state)
    }
    const handleDecrement = ()=>{
        if(count>0){
            setCount(count-1);
        }
        
    }
    
    return (
        <div>
            <h2>count Value : {count}</h2>
            <button className="btn" onClick={handleIncrement}>Increment</button>
            <button className="btn" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default About
