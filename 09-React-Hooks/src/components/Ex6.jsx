import React, { createRef, Fragment, useRef, useState } from 'react'

const Ex6 = () => {

    const textInput1 = createRef();

    const focusTextInput1 = () => {
        console.log(textInput1)
        console.log(textInput1.current)
        console.log(`textInput1.current.id = ${textInput1.current.id}`)
        console.log(`textInput1.current.name = ${textInput1.current.name}`)
        console.log(`textInput1.current.placeholder = ${textInput1.current.placeholder}`);
        console.log(`textInput1.current.value = ${textInput1.current.value}`);
        textInput1.current.focus(); // Focus on the input field
    }

    const textInput2 = useRef();
    const focusTextInput2 = () => {
      console.log(textInput2);
      console.log(textInput2.current)
      console.log(`textInput2.current.id = ${textInput2.current.id}`)
      console.log(`textInput2.current.name = ${textInput2.current.name}`)
      console.log(`textInput2.current.placeholder = ${textInput2.current.placeholder}`);
      console.log(`textInput2.current.value = ${textInput2.current.value}`);
      textInput2.current.focus(); // Focus on the input field
    }

    // Example-1
    const [renderIndex, setRenderIndex] = useState(1);

    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();

    if(!refFromUseRef.current){
        refFromUseRef.current = renderIndex;
    }

    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }

    // Example-2

    const myName = useRef();
    const myEmail = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            name: myName.current.value,
            email: myEmail.current.value
        }

        console.log(`DATA = ${JSON.stringify(data)}`);
    }

  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-5">useRef & createRef Hook</h5>
                </div>
            </div>
        </div>

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="p-3 border my-3">
                                <h3 className="text-warning">createRef Example..!</h3>
                                <p>
                                    <b>Note : </b>
                                    createRef will always create a new ref
                                    <b>
                                        (REF = A ref is a plain JS object. React elements via the
                                        ref attribute)
                                    </b>
                                    . In a class-based component, you would typically put the ref
                                    in an instance property during construction (e.g. this.input =
                                    createRef()). (Used In Class Component)
                                </p>

                                <input type="text" name="createRef" id="createRef" placeholder='Enter some Data' className="form-control my-3" ref={textInput1}/>

                                <button className="btn btn-warning" onClick={focusTextInput1}>Focus the text input</button>
                            </div>

                            <div className="p-3 border my-3">
                                <h3 className="text-success">useRef Example..!</h3>
                                <p>
                                    <b>Note : </b>
                                    You don't have the above option in a function component. useRef takes care of returning the same ref each time as on the initial rendering.
                                </p>
                                <input
                                    type="text"
                                    id='useRef'
                                    name='useRef'
                                    className="form-control my-3"
                                    ref={textInput2}
                                    />
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={focusTextInput2}
                                    >
                                    Focus the text input
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='card-title'>Example-1</h4>
                            <p className="card-text">
                                Current render Index : <b>{renderIndex}</b>
                            </p>

                            <p className="card-text">
                                First render index remembered within refFromUseRef.current:
                                <b>{refFromUseRef.current}</b>
                            </p>

                            <p className="card-text">
                                First render index unsuccessfully remembered within
                                refFromCreateRef.current:
                                <b>{refFromCreateRef.current}</b>
                            </p>

                            <button className="btn btn-outline-success" onClick={()=> setRenderIndex(renderIndex+1)}>Cause Re-render</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='card-title'>Example-2</h4>
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name='name'
                                        placeholder="Enter name"
                                        ref={myName}
                                        required
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        placeholder="Enter email"
                                        ref={myEmail}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my">
            <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <h4 className="card-title">Important Note :</h4>
                            <p>A ref is a plain JS object (current:some value)</p>
                            <p>
                                React.createRef() is a factory returning a ref (current: null)
                            </p>
                            <p>
                                useRef(initValue) also returns a ref (current: initValue) akin
                                to React.createRef(). Besides, it memoizes this ref to be
                                persistent across multiple renders in a function component.
                            </p>
                            <p>
                                It is sufficient to use React.createRef in class components, as
                                the ref object is assigned to an instance variable, hence
                                accessible throughout the component and its lifecycle
                            </p>
                            <p>
                                <strong>Replace useRef with useState + createRef</strong>
                            </p>
                            <p>
                                1) useRef() is basically useState(current: initialValue)[0].
                            </p>
                            <p>
                                2) useRef(null) is basically useState(React.createRef())[0].
                            </p>
                            <p>
                                3) useState causes a re-render in contrast to useRef. More
                                formally, React compares the old and new object reference for
                                useState, when a new value is set via its setter method. If we
                                mutate the state of useState directly (opposed to setter
                                invocation), its behavior more or less becomes equivalent to
                                useRef, as no re-render is triggered anymore:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex6