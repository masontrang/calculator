import { initialState, calcReducer } from "./calculator";

test("1st test - input number 1 as first input", () => {
  const nextState = calcReducer(initialState, { pressed: 1 });
  console.log(nextState.current);
  expect(nextState.current).toBe(1);
  expect(nextState.previous).toEqual(0);
  expect(nextState.operator).toEqual(null);
});

test("2nd test - input number 9 as second input", () => {
  const nextState = calcReducer(
    { current: 1, previous: 0, operator: null },
    { pressed: 9 }
  );
  expect(nextState.current).toBe(19);
  expect(nextState.previous).toEqual(0);
  expect(nextState.operator).toEqual(null);
});

test("3rd test - input + operator", () => {
  const nextState = calcReducer(
    { current: 19, previous: 0, operator: null },
    { pressed: "+" }
  );
  expect(nextState.current).toBe(0);
  expect(nextState.previous).toEqual(19);
  expect(nextState.operator).toEqual("+");
});

test("4th test - input number 5 after + operator", () => {
  const nextState = calcReducer(
    { current: 0, previous: 19, operator: "+" },
    { pressed: 5 }
  );
  expect(nextState.current).toEqual(5);
  expect(nextState.previous).toEqual(19);
  expect(nextState.operator).toEqual("+");
});

test("5th test - equal works", () => {
  const nextState = calcReducer(
    { current: 5, previous: 19, operator: "+" },
    { pressed: "=" }
  );
  expect(nextState.current).toBe(24);
  expect(nextState.previous).toEqual(19);
  expect(nextState.operator).toEqual(null);
});
//subtraction test start
//start here
test("6th test - press '-' button works", () => {
  const nextState = calcReducer(
    { current: 19, previous: 0, operator: null },
    { pressed: "-" }
  );
  expect(nextState.current).toBe(0);
  expect(nextState.previous).toEqual(19);
  expect(nextState.operator).toEqual("-");
});

test("7th test - subtraction equals works", () => {
  const nextState = calcReducer(
    { current: 5, previous: 19, operator: "-" },
    { pressed: "=" }
  );
  expect(nextState.current).toBe(14);
  expect(nextState.previous).toEqual(19);
  expect(nextState.operator).toEqual(null);
});

test("8th test - clear", () => {
  const nextState = calcReducer(
    { current: 5, previous: 19, operator: "-" },
    { pressed: "clear" }
  );
  expect(nextState).toEqual(initialState);
});

// test("7th test - multiply works", () => {
//   const nextState = calcReducer(
//     { current: 5, previous: 19, operator: "*" },
//     { pressed: "=" }
//   );
//   expect(nextState.current).toBe(95);
//   expect(nextState.previous).toEqual(19);
//   expect(nextState.operator).toEqual(null);
// });

// test("8th test - division works", () => {
//   const nextState = calcReducer(
//     { current: 5, previous: 19, operator: "+" },
//     { pressed: "=" }
//   );
//   expect(nextState.current).toBe(24);
//   expect(nextState.previous).toEqual(19);
//   expect(nextState.operator).toEqual(null);
// });

// test("9th test - clear works", () => {
//   const nextState = calcReducer(
//     { current: 5, previous: 19, operator: "+" },
//     { pressed: "=" }
//   );
//   expect(nextState.current).toBe(24);
//   expect(nextState.previous).toEqual(19);
//   expect(nextState.operator).toEqual(null);
// });
// test("input number 9 as second input", () => {
//   const firstState = calcReducer(initialState, { pressed: 1 });
//   const secondState = calcReducer(firstState, { pressed: 9 });
//   expect(secondState.current).toBe(19);
//   expect(secondState.previous).toEqual(1);
//   expect(secondState.operator).toEqual(null);

// });

// test("marks an O on the second move", () => {
//   const firstState = reducer(initialState, { row: 0, col: 0 });
//   const secondState = reducer(firstState, { row: 1, col: 0 });

//   expect(secondState.player).toEqual("X");
//   expect(secondState.board[0][0]).toEqual("X");
//   expect(secondState.board[1][0]).toEqual("O");
// });
