import React, { Fragment, useEffect, useState } from "react";
import EditClient from "./EditClient";

const ListClients = () => {
  const [clients, setClients] = useState([]);
  const deleteClient = async id => {
    try {
      const deleteClient = await fetch(`http://localhost:5000/clients/${id}`, {
        method: "DELETE"
      });

      setClients(clients.filter(client => client.client_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:5000/clients");
      const jsonData = await response.json();

      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.client_id}>
              <td>{client.name}</td>
              <td>{client.description}</td>
              <td>
                <EditClient client={client} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClient(client.client_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListClients;