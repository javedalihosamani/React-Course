import React, { Component } from 'react'

export default class Ex10 extends Component {
    // Default props can be defined in the constructor or as a static property
    static defaultProps = {
        title: 'Default Title',
        content: 'Default Content',
        img :"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
        name: "Parent Card",
        lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem tempora architecto ex ipsum molestiae temporibus odit harum, repellat pariatur labore non qui voluptates tenetur sunt, quidem minima. Quibusdam."
    }
    
    render() {
        const {title, content, img, name, lorem} = this.props;
        return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <h1 className="bg-warning text-white p-3 text-center rounded">
                            EXAMPLE-10 : REACT CLASS COMPONENT DEFAULT PROPS
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="border rounded lead p-3 my-3">
                            <h2>{title}</h2>
                            <p>{content}</p>
                            <img src={img} alt={name} />
                            <h3>{name}</h3>
                            <p>{lorem}</p>
                        </div>
                        <div className="border rounded lead p-3 my-3">
                            <div className="card">
                                <img src={img} alt={name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{lorem}</p>
                                    <button type="button" className='btn btn-outline-primary'>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
