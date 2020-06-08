import React, { Fragment, useState } from "react";

const EditClient = ({ client }) => {
  const [name, setName] = useState(client.name);
  const [description, setDescription] = useState(client.description);

  const updateClient = async e => {
    e.preventDefault();
    try {
      const body = { name, description };
      const response = await fetch(
        `http://localhost:5000/clients/${client.client_id}`,
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
        data-target={`#id${client.client_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${client.client_id}`}
        onClick={() => setDescription(client.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Client</h4>
            <div class="modal-body">
            </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(client.description)}
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
            <label>Description</label>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </div>


            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={event => updateClient(event)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(client.description)}
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

export default EditClient;