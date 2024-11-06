const Ex7 = ({title, color, name}) => {

    /* Option-2 
    const Ex7 = (props) => {
    const {title, color, name} = props; */

    return(
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <h1 className="bg-warning text-white p-3 text-center rounded">
                            EXAMPLE-7 : REACT FUNCTIONAL DEFAULT PROPS
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="border lead p-3 rounded">
                            <p>{title}</p>
                            <h2 style={{backgroundColor:color}}>{name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

Ex7.defaultProps = {
    title: "Default Title",
    color: "#000",
    name : "REACT FUNCTIONAL DEFAULT PROPS",
};
export default Ex7;