import Ex1 from "./components/Ex1";
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from "./components/Ex5";
import Ex6 from "./components/Ex6";
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';
import Ex10 from './components/Ex10';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="bg-success p-3 text-center text-white rounded">
              THIS IS APP COMPONENT..! (PARENT COMPONENT)
            </h1>
          </div>
        </div>
      </div>

      <Ex1/>
      <Ex2/>
      <Ex3/>
      <Ex4/> 
      <Ex5
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem tempora architecto ex ipsum molestiae temporibus odit harum, repellat pariatur labore non qui voluptates tenetur sunt, quidem minima. Quibusdam."
      />
      <Ex6
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem tempora architecto ex ipsum molestiae temporibus odit harum, repellat pariatur labore non qui voluptates tenetur sunt, quidem minima. Quibusdam."
      /> 
      <Ex7/>
      <Ex8
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem tempora architecto ex ipsum molestiae temporibus odit harum, repellat pariatur labore non qui voluptates tenetur sunt, quidem minima. Quibusdam."
      />
      <Ex9
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a autem tempora architecto ex ipsum molestiae temporibus odit harum, repellat pariatur labore non qui voluptates tenetur sunt, quidem minima. Quibusdam."
      />
      <Ex10/>
    </>
  );
}

export default App;
