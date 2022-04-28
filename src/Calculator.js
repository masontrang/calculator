const initialState = {
  current: 0,
  previous: 0,
  operator: null,
};

function calcReducer(state, action) {
  const { current, previous, operator } = state;
  const { pressed } = action;

  if (pressed === "+") {
    return { current: 0, previous: current, operator: pressed };
  }
  if (pressed === "=") {
    return { current: current + previous, previous, operator: null };
  }

  return { current: current * 10 + pressed, previous, operator };
}
