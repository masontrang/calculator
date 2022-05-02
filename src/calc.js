export const initialState = {
  current: 0,
  previous: 0,
  operator: null,
};

export const operators = ["+", "-", "/", "*"];

//reducer always has two arguments (current state and action), always returns the next state
export function calcReducer(state, action) {
  const { current, previous, operator } = state;
  const { pressed } = action; // same as action.pressed
  // const { pressed, text } = action; //same as action.text

  console.log("action", action);
  // state.current = pressed;
  //immutability
  const newState = { ...state };
  newState.current = pressed;

  if (pressed === "C") {
    return initialState;
  }

  if (pressed === "+/-") {
    return { current: -current, previous: current, operator: null };
  }

  if (pressed === "%") {
    return { current: current / 100, previous: current, operator: null };
  }

  if (operators.includes(pressed)) {
    return { current: 0, previous: current, operator: pressed };
  }

  if (pressed === "=") {
    return {
      current: switchMathFunction(current, previous, operator),
      previous,
      operator: null,
    };
  }

  return { current: current * 10 + pressed, previous, operator };

  // return newState;

  function switchMathFunction(current, previous, operator) {
    switch (operator) {
      case "+":
        return previous + current;
      case "-":
        return previous - current;
      case "*":
        return previous * current;
      case "/":
        return previous / current;
      default:
        throw new Error("unrecognized operator");
    }
  }
}

// const mathFunctions = {
//   '+': (current, previous) => previous + current,
// };

// mathFunctions[operator](current, previous)

// function mathFunction(current, previous, operator) {
//   if (operator === "+") {
//     return current + previous;
//   }
//   if (operator === "-") {
//     return previous - current;
//   }
//   if (operator === "*") {
//     return current * previous;
//   }
//   if (operator === "/") {
//     return previous / current;
//   }
// }

//   if ('key' in object) {

//   }

//   for (index in array) {

//   }

//   for (value of array) {

//   }

//   for (value of Object.values(object)) {

//   }
