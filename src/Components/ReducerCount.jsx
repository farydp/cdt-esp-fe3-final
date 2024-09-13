import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count -1}
        case "reset":
            return initialState
        default:
            break;
    }
}

const initialState = {count: 0}
const ReducerCount = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>  
        <h1>{state.count}</h1>
        <div>ReducerCount</div>
        <button onClick={() => dispatch({type: "decrement"})} >Decrement</button>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={ () => dispatch({type: "reset", payload: initialState}) } >Reset</button>
    </>
  )
}

export default ReducerCount