/*
function Counter(){
    return(
        <div>
            <button>Increment</button>
            <button>Decrement</button>
        </div>

    )
}
export default Counter;
*/
import React,{Component} from 'react';
class Counter extends React.Component{
    state = {
        count:0;
    }
    handleIncrement = () => {
        //never mutate the state directly
        this.setState({count:this.state.count+1})
    }
    handleDecrement = () => {
        //never mutate the state directly
        this.setState({count:this.state.count-1})
    }
    handleReset = () => {
        //never mutate the state directly
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <p>Count : {this.state.count}</p>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        )

    }

    
}
export default Counter;