import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mounting Phase",
    };
    //console.log("THIS IS A PARENT COMPONENT CONSTRUCTOR METHOD");
  }

  //User Defined Method
  mount() {
    ReactDOM.createRoot(document.getElementById("renderHere")).render(
      <React.StrictMode>
        <Counter counter={0} />
      </React.StrictMode>
    );
  }

  unmount() {
    console.log("component UnMounted..!");
    ReactDOM.createRoot(document.getElementById("renderHere")).render(null);
  }

  render() {
    //console.log("THIS IS A PARENT COMPONENT RENDER METHOD");
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-2 text-success text-center">LIFECYCLE</h1>
            </div>
          </div>
        </div>
        <hr />
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <div className="lead p-3 rounded border shadow-sm">
                <h2 className="text-center">{this.state.name}</h2>
                <hr />
                <button
                  className="btn btn-outline-success"
                  onClick={this.mount}
                >
                  Mount
                </button>
                <button
                  className="btn btn-outline-danger float-end"
                  onClick={this.unmount}
                >
                  UnMount
                </button>
              </div>
            </div>
          </div>
        </div>
        <section id="renderHere"></section>
      </Fragment>
    );
  }
}
