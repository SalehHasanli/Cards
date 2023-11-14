import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./course.js";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import fullweb from "./images/ccsharp.png";
import frontend from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="contanier">
        <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores voluptate esse vel temporibus aut magni vitae aliquid suscipit ratione quis nihil vero ea provident minima eos sint reiciendis! Quidem?"
            />
          </div>
          <div className="column">
            <Course
              image={bootstrap5}
              title="bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores voluptate esse vel temporibus aut magni vitae aliquid suscipit ratione quis nihil vero ea provident minima eos sint reiciendis! Quidem?"
            />
          </div>
          <div className="column">
            <Course
              image={fullweb}
              title="full web"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores voluptate esse vel temporibus aut magni vitae aliquid suscipit ratione quis nihil vero ea provident minima eos sint reiciendis! Quidem?"
            />
          </div>
          <div className="column">
            <Course
              image={frontend}
              title="front-end"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores voluptate esse vel temporibus aut magni vitae aliquid suscipit ratione quis nihil vero ea provident minima eos sint reiciendis! Quidem?"
            />
          </div>
        </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;
