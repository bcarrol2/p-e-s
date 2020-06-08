import React, { Fragment, useState } from "react";

const InputClient = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const body = { name, description };
      const response = await fetch("http://localhost:5000/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">PES Software Clients</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Name of app"
          className="form-control"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description of app"
          className="form-control"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputClient;