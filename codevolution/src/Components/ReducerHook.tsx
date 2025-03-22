import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const ReducerHook = () => {
  const initialState = {
    count: 1,
  };

  const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h4>Reducer Hook</h4>
      <p>Counter : {state.count} </p>

      <button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        className=""
      >
        Add By One
      </button>
      <button
        onClick={() => dispatch({ type: "increment", payload: 10 })}
        className="ms-3"
      >
        Add By 10
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
        className="ms-3"
      >
        Subtract By 1
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
        className="ms-3"
      >
        Subtract By 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })} className="ms-3">
        Reset
      </button>
    </>
  );
};

export default ReducerHook;
