import React from 'react';
import { render } from "@testing-library/react";
import App, { addStrike2 } from "./App";
// import * as rtl from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("App renders without crashing", () => {
  render(<App />);
});

test("addStrike adds 1 to the current strike count", () => {
  expect(addStrike2(1)).toBe(1);
});
