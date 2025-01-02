import React, { Fragment, useReducer, useState } from 'react'

// Example-2
const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    console.log(action.type);
    switch (action.type) {
        case 'INCREMENT':
            /* return {count: state.count+1, showText : state.showText } */
            return {...state, count: state.count + 1};
        case 'TOGGLE_TEXT':
            /* return{count:state.count, showText: !state.showText}; */
            return {...state, showText:!state.showText};
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
}

// Example-3
//Initial State
const initialState = {width:50};

// Reduce action and state Logic
const reduce = (states, action) => {
    try {
        switch (action) {
            case 'plus':
                return {width : states.width + 10}
            case 'minus':
                 return {width : Math.max(states.width - 10)}
            default:
                throw new Error("Sorry, Not a valid action..");
        }
    } catch (error) {
        console.log(error.message);
    }
}

const Ex2 = () => {
    /* const [state,dispatcher] = useReducer(reducer,initialstate or InitialValue)

    State = Is used for declare variables or state
    dispatcher = 1) Is used for call state Object.
                2) Helps to passing an action constants through dispatcher
    reducer = 1) Is a function, is used for handle the actions. 
                2) Action is used for to determine what kind of action try to take */

    // Example-1
    const [counter, setCounter] = useState(0);
    const [isView, setIsView] = useState(false);
    const increment = () => {
        setCounter(counter + 1);
        setIsView(!isView);
    }

    // Example-2
    const [state, dispatcher] =  useReducer(reducer, {count:0, showText:true});
    console.log(state);

    // Example-3
    const [states, dispatch] = useReducer(reduce, initialState);

  return (
    <Fragment>
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                <h5 className="display-3 text-success">useReducer Hook</h5>
                <p className="text-secondary">
                    useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
                </p>
                <p className="text-secondary">useReducer also lets you optimize performance for components that trigger deep updates.</p>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h1>Example-1</h1>
                        <p><b>COUNTER = </b>{counter}</p>
                        <button className="btn btn-outline-success" onClick={increment}>Increment</button>
                        <p><b>ISVIEW = </b>{isView && <b>Condition is true..!</b>}</p>
                        <p><b>ISVIEW = </b>{isView ? "Condition is True..!" : "Condition is False..!"}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h1>Example-2</h1>
                        <p><b>COUNT = </b>{state.count}</p>
                        <p><b>SHOW_TEXT = </b>{state.showText && "This is True Condition.!"}</p>
                        <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick={()=>{
                            dispatcher({type :'INCREMENT'});
                            dispatcher({type :'TOGGLE_TEXT'});
                            }
                        }>
                        Reducer
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="lead p-3 border rounded my-3">
                    <h1>Example - 3</h1>
                    <p><b>WIDTH = </b>{states.width}</p>
                    <button className='btn btn-outline-success' onClick={()=>dispatch('plus')}>Plus</button>
                    <button className='btn btn-outline-danger mx-3' onClick={()=>dispatch('minus')}>Minus</button>
                    <article className="bg-success my-3" style={{width:states.width}}>Article</article>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex2