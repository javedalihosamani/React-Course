import React from 'react'
import { NavLink } from 'react-router-dom'

const Pnf = () => {

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col">
                <h2 className="display-3 text-danger text-center">Page Not Found</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="text-center">
                    <p>Goto the following links</p>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to={`/`}>Home</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex1`}>Ex1</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex3`}>Ex3</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex4`}>Ex4</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex5`}>Ex5</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex6`}>Ex6</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex7`}>Ex7</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex8`}>Ex8</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to={`/ex9`}>Ex9</NavLink></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pnf