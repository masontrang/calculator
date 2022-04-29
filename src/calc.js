export const initialState = {
  current: 0,
  previous: 0,
  operator: null,
};

export const operators = ["+", "-", "/", "*"];

export function calcReducer(state, action) {
  const { current, previous, operator } = state;
  const { pressed } = action;

  if (pressed === "clear") {
    return initialState;
  }

  //   if ('key' in object) {

  //   }

  //   for (index in array) {

  //   }

  //   for (value of array) {

  //   }

  //   for (value of Object.values(object)) {

  //   }

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
}

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
