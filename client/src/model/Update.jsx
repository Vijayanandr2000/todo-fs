import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Update = ({ modal, toggle, val, setItem, item }) => {
  const [task, setTask] = useState("");
  const [hint, setHint] = useState("");
  const [pt, setPt] = useState("");
  const [ph, setPh] = useState("");
  useEffect(() => {
    item.map((e) => {
      if (e._id == val) {
        setPt(e.task);
        setPh(e.des);
      }
    });
  });

  const updateTask = (e) => {
    //

    let temp = {
      task: task,
      des: hint,
    };
    fetch(`https://todo-backend-mern.herokuapp.com/todo/${val}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((data) => setItem(data));
    window.location.reload();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Todo's</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task</label>
              <input
                type="text"
                className="form-control"
                placeholder={pt}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Hints</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder={ph}
                onChange={(e) => setHint(e.target.value)}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateTask}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Update;
