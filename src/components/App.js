import React, {useReducer, useState} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { applyNumber, changeOperation, delNumber, calculateResult, num1, num2 } from '../actions';

const initialState = {total: 0, operation: '+', memory: 0}

function reducer(state, action) {
  switch(action.type) {
    case 'APPLY_NUMBER':
      return{...state, total: action.value}
    case 'CHANGE_OPERATION':
      if(num2 > 0) {
        const result = calculateResult(num1, num2, state.operation)
        return { ...state, operation: action.payload, total: result}
      }
      return{ ...state, operation: action.payload };
    case 'Clear':
      value.splice(0, value.length)
      delNumber()
      return { ...state, total: 0 };
    case 'M+':
      return { ...state, memory: state.total };
    case 'MR':
      applyNumber(state.memory)
      return { ...state, total: state.memory }
    case 'MC':
      return { ...state, memory: 0 };
    default:
      return state;
  }
}

export let value = []

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch({type: 'M+'})}/>
              <CalcButton value={"MR"} onClick={() => dispatch({type: 'MR'})}/>
              <CalcButton value={"MC"} onClick={() => dispatch({type: 'MC'})}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatch(applyNumber(1))}/>
              <CalcButton value={2} onClick={() => dispatch(applyNumber(2))}/>
              <CalcButton value={3} onClick={() => dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={() => dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick={() => dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={() => dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={() => dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> dispatch(changeOperation('+'))}/>
              <CalcButton value={"*"} onClick={()=> dispatch(changeOperation('*'))}/>
              <CalcButton value={"-"} onClick={()=> dispatch(changeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch({type: 'Clear'})}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
