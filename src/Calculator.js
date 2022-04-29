export const initialState = {
  current: 0,
  previous: 0,
  operator: null,
};

export function calcReducer(state, action) {
  const { current, previous, operator } = state;
  const { pressed } = action;

  // switched(action.type)
  //  case '+':
  //  return ;

  if (pressed === "clear") {
    return initialState;
  }

  if (
    pressed === "+" ||
    pressed === "-" ||
    pressed === "*" ||
    pressed === "/"
  ) {
    return { current: 0, previous: current, operator: pressed };
  }

  if (pressed === "=") {
    return {
      current: mathFunction(current, previous, operator),
      previous,
      operator: null,
    };
  }

  return { current: current * 10 + pressed, previous, operator };
}

function mathFunction(current, previous, operator) {
  if (operator === "+") {
    return current + previous;
  }
  if (operator === "-") {
    return previous - current;
  }
  if (operator === "*") {
    return current * previous;
  }
  if (operator === "/") {
    return previous / current;
  }
}

export default Calculator;
