import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Create = ({ modal, toggle }) => {
  const [task, setTask] = useState("");
  const [hint, setHint] = useState("");
  // const [item, setItem] = useState([]);

  const addTodo = () => {
    var data = {
      todo: task,
      hint: hint,
    };
    // console.log(data);
    fetch("https://todo-backend-mern.herokuapp.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((e) => alert(e.message));
    window.location.reload();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Todo's</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Hints</label>
              <textarea
                rows="5"
                className="form-control"
                onChange={(e) => setHint(e.target.value)}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addTodo}>
            ADD
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Create;
