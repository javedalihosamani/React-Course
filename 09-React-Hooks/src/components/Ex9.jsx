import React, { createContext, Fragment, useState } from 'react';
import Child1 from './ex9Sub/Child1';
import Child2 from './ex9Sub/Child2';

export const userDetailsContext = createContext(null);

const Ex9 = () => {
    const [userDetails, setUserDetails] = useState({
        name : "React",
        age : 30
    });
  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-3">createContext and useContext Hook</h5>
                    <p className="text-secondary">
                        IS USED TO CREATE A COMMON DATA THAT CAN BE ACCESSED THROUGHOUT THE COMPONENT HIERARCHY.
                    </p>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h3 className="display-6 text-secondary">
                        This is the Parent Component.
                    </h3>
                </div>
            </div>
        </div>
        <Child1 {...userDetails}/>
        <userDetailsContext.Provider value={userDetails}>
            <Child2/>
        </userDetailsContext.Provider>
    </Fragment>
  )
}

export default Ex9