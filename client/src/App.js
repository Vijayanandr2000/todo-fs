import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./model/Create";
import Card from "./component/Card";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div className="container text-center text-dark">
        <h2 className="mt-5 text-light">TODO'S</h2>
        <button
          className="btn btn-primary mt-3 text-center"
          onClick={() => setModal(true)}
        >
          Create
        </button>
      </div>
      <Create toggle={toggle} modal={modal} />
      <div className="container-fluid mt-5">
        <Card />
      </div>
    </div>
  );
}

export default App;
