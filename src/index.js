import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const buttonText = { text: 'Click Me!' };
  const labelText = "Enter name:";

  const getTime = () => {
    return (new Date()).toLocaleTimeString()
  }

  return (
    <div>
      <h1>Hi Jan I Love You. meet today</h1>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
      {getTime()}
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));