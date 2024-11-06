// Global Variables
let x = 21;
const y = 124;
let title = "Welcome to string data";
let isAdmin = true;

const user = {
    //key:value => Property
  name: "Raju",
  age: 22,
  email: "raju@gmail.com"
}

const emp = ['Manu', 'Chirag', 'John', 'Ali']

function Ex1(){
    /* Local Variable
    let x = 555; */
    return(
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <h1 className="bg-warning text-white p-3 text-center rounded">
                            EXAMPLE-1
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="border lead p-3 text-center rounded">
                        <h3>Variables in Local functional Component</h3>
                        <hr />

                        <p><b>Number Variable X : </b> {x}</p>
                        <p><b>Number Variable Y : </b> {y}</p>
                        <p><b>PRODUCTS OF X * Y : </b> {x*y}</p>
                        <hr />

                        <p><b>String Variable TITLE : </b> {title}</p>
                        <hr />

                        <p><b>Boolean Variable IS ADMIN : </b> {isAdmin}</p>
                        <hr />

                        <p><b>Condition Statement : </b> { x<y ? "Say True" : "Say False"  }</p>
                        <p><b>Condition Statement : </b> { x>y ? "Say True" : "Say False"  }</p>
                        <p><b>Boolean Variable IS ADMIN : </b> { isAdmin ? "Say True" : "Say False" }</p>
                        <hr />

                        {/* <p><b>Object :</b> {user}</p> */}
                        <p><b>Object USER.NAME :</b> {user.name}</p>
                        <p><b>Object USER.AGE :</b> {user.age}</p>
                        <p><b>Object USER.EMAIL :</b> {user.email}</p>
                        <hr />

                        <p><b>Array  EMP:</b> {emp}</p>
                        <p><b>Array  EMP[0]:</b> {emp[0]}</p>
                        <p><b>Array  EMP[1]:</b> {emp[1]}</p>
                        <p><b>Array  EMP[2]:</b> {emp[2]}</p>
                        <p><b>Array  EMP[3]:</b> {emp[3]}</p>
                        <hr />

                        <div>
                            {
                                emp.map((item, index) => (
                                    <div key={index}>
                                        <p><b>Array  EMP[{index}]:</b> {item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ex1;