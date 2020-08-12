import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    input: "",
  };

  getResult = () => {
    this.setState({ input: eval(this.state.input.replace(/^0+/, "")) });
  };

  handleKeyPressed = (keyValue) => {
    switch (keyValue) {
      case "C":
        this.setState({ input: "" });
        break;
      case "=":
        this.getResult();
        break;
      default:
        this.setState({ input: this.state.input + keyValue });
        break;
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="input" id="input">
          {this.state.input}
        </div>
        <div className="buttons">
          <div className="operators">
            <div onClick={() => this.handleKeyPressed("+")}>+</div>
            <div onClick={() => this.handleKeyPressed("-")}>-</div>
            <div onClick={() => this.handleKeyPressed("*")}>&times;</div>
            <div onClick={() => this.handleKeyPressed("/")}>&divide;</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div onClick={() => this.handleKeyPressed("7")}>7</div>
              <div onClick={() => this.handleKeyPressed("8")}>8</div>
              <div onClick={() => this.handleKeyPressed("9")}>9</div>
            </div>
            <div className="numbers">
              <div onClick={() => this.handleKeyPressed("4")}>4</div>
              <div onClick={() => this.handleKeyPressed("5")}>5</div>
              <div onClick={() => this.handleKeyPressed("6")}>6</div>
            </div>
            <div className="numbers">
              <div onClick={() => this.handleKeyPressed("1")}>1</div>
              <div onClick={() => this.handleKeyPressed("2")}>2</div>
              <div onClick={() => this.handleKeyPressed("3")}>3</div>
            </div>
            <div className="numbers">
              <div onClick={() => this.handleKeyPressed("0")}>0</div>
              <div onClick={() => this.handleKeyPressed(".")}>.</div>
              <div id="clear" onClick={() => this.handleKeyPressed("C")}>
                C
              </div>
            </div>
          </div>
          <div
            className="equal"
            id="result"
            onClick={() => this.handleKeyPressed("=")}
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default App;
