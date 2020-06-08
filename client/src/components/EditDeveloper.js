import React, { Fragment, useState } from "react";

const EditDeveloper = ({ developer }) => {
  const [name, setName] = useState(developer.name);

  const updateDeveloper = async event => {
    event.preventDefault();
    try {
      const body = { name };
      const response = await fetch(
        `http://localhost:5000/developers/${developer.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${developer.id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${developer.id}`}
        onClick={() => setName(developer.name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Developer</h4>
            <div class="modal-body">
            </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setName(developer.name)}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
            <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={event => updateDeveloper(event)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(developer.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditDeveloper;