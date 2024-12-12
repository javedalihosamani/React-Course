import React, { Component } from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log("THIS IS A CHILD COMPONENT CONSTRUCTOR METHOD");
    }

    static getDerivedStateFromProps(props, state) {
      console.log(`THIS IS A CHILD COMPONENT getDerivedStateFromProps METHOD`);
      console.log(`PROPS VALUE IS : ${props.counter}`);
      console.log(`STATE VALUE IS : ${state.count}`);
      return true
    }

    componentDidMount(){
        console.log("THIS IS A CHILD COMPONENT componentDidMount METHOD");
    }

    // User Defined Method
    updateCounter(){
      const root = ReactDOM.createRoot(document.getElementById('renderHere'));
      root.render(
        <React.StrictMode>
          <Counter counter={this.props.counter+1}/>
        </React.StrictMode>
      );
    }
    
    // User Defined Method
    updateCount(){
      this.setState({count: this.state.count + 1});
    }

    shouldComponentUpdate(props, state){
      console.log(`THIS IS A CHILD COMPONENT shouldComponentUpdate METHOD`);
      console.log(`CURRENT STATE VALUE IS : ${state.count}`);    
      console.log(`CURRENT PROPS VALUE IS : ${props.counter}`);    
      /* this.setState({isActive: !this.state.isActive })
      console.log(`CURRENT STATE VALUE IS : ${this.state.isActive}`);  */  
      return true;
    }

    getSnapshotBeforeUpdate(oldProps, oldState) { 
      console.log(`THIS IS A CHILD COMPONENT getSnapshotBeforeUpdate METHOD`);     
      console.log(`OLD PROPS VALUE IS : ${oldProps.counter}`);     
      console.log(`OLD STATE VALUE IS : ${oldState.count}`);
      return true; 
      }

    componentDidUpdate(props, state, snap){
      console.log(`THIS IS A CHILD COMPONENT componentDidUpdate METHOD`); 
      console.log(`PROPS VALUE IS : ${props.counter}`); 
      console.log(`STATE VALUE IS : ${state.count}`); 
      console.log(`SNAP VALUE IS : ${snap}`); 
    }
    
  render() {
    console.log("THIS IS A CHILD COMPONENT RENDER METHOD");
    return (
      <Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-2 text-success text-center">Counter Child Component</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded text-center">
                      <h1>PROPS VALUE IS : {this.props.counter}</h1>
                      <h1>STATE VALUE IS : {this.state.count}</h1>
                      {
                        this.state.isActive ?
                        <h2 className='text-success'>WELCOME TO LIFECYCLE METHODS</h2>
                        : (
                          <div>
                            <h2>Need More Counts</h2>
                            <button 
                            className="btn btn-outline-warning"
                            onClick={this.updateCounter.bind(this)}>Add +1 (Update Props value)</button>
                            <button 
                            className="btn btn-outline-warning"
                            onClick={this.updateCount.bind(this)}>Add +1 (Update State value)</button>
                          </div>
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }

  /* componentWillUnmount(){
    console.log("Parent Component UnMounted..!");
  } */
}

