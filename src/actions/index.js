import { value } from '../components/App'

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export let num1 = 0
export let num2 = 0

export const applyNumber = (number) => {
    value.push(number)
    return({type: APPLY_NUMBER, value: value.join('')});
}

export const changeOperation = (operation) => {
    if(!num1) {
        num1 = value.join('')
        value.splice(0, value.length)

    }
    if(num1) {
        num2 = value.join('')
    }
    return({type: CHANGE_OPERATION, payload: operation});
}

export const calculateResult = (num1, num2, operation) => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let result = 0
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      // Add more cases for other operations if needed
      default:
        break;
    }

    num1 = result
    num2 = 0
    return result
  };

export const delNumber = () => {
    num1 = 0
    num2 = 0
}