import React, { Component } from 'react'
import Users from './components/Users';

const url = "https://dummyjson.com";

/* Group of Properties
    1) State -> Collections of Variable/Object 
    2) Behavior -> Collections of methods/function*/

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount(){
    fetch(`${url}/users`)
      .then((res) => res.json())
      .then((out) => {

        /* console.log("USERS :", out);
        console.log("USERS :", out.users); */

        this.setState({ users: out.users });
      })
      .catch((err) => console.log(err.message));
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">
                Props in Class Component..!
              </h1>
            </div>
          </div>
        </div>
        <div className='container'>
            <div className="row">
              {
                this.state.users.map((items, index)=>{
                  return(<Users key={index} {...items}/>)
                })
              }
            </div>
        </div>
      </>
    )
  }
}