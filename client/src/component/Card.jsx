import React, { useEffect, useState } from "react";
import Update from "../model/Update";

const Card = () => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);
  const [val, setVal] = useState("");
  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetch("https://todo-backend-mern.herokuapp.com/todo", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data.result);
        console.log(data.result);
      });
  }, []);

  const deleteTask = (e) => {
    // console.log(e.target.value);
    // e.preventDefault();
    fetch(`https://todo-backend-mern.herokuapp.com/todo/${e.target.value}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setItem(data));
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="row">
        {item.map((e) => {
          console.log(e);
          return (
            <div className="col col-lg-3 col-md-6 col-sm-12" key={e._id}>
              <div
                className="card mt-5 card-outline-dark"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <h3 className="card-title mt-0">{e.task}</h3>
                  <h6 className="card-subtitle mb-4 ">{e.des}</h6>

                  <button
                    className="btn btn-danger text-center btn-sm float-right"
                    onClick={deleteTask}
                    value={e._id}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-warning  mr-3 text-center btn-sm float-right"
                    value={e._id}
                    onClick={() => {
                      setModal(true);
                      setVal(e._id);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Update
        toggle={toggle}
        modal={modal}
        val={val}
        setItem={setItem}
        item={item}
      />
    </div>
  );
};
export default Card;
