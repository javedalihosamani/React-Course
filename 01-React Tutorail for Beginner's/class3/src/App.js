import Users from "./components/Users";
import users from "./data/users"
function App() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <div className="bg-success text-center text-white p-3 rounded shadow">
              <h1>FUNCTIONAL COMPONENT PROPS</h1>
            </div>
          </div>
        </div>
      </div>
      <Users users = {users}/>
    </>
  );
}

export default App;
