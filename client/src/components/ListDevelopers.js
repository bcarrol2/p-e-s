import React, { Fragment, useEffect, useState } from "react";
import EditDeveloper from "./EditDeveloper";

const ListDevelopers = () => {
  const [developers, setDevelopers] = useState([]);
  const deleteDeveloper = async id => {
    try {
      const deleteDeveloper = await fetch(`http://localhost:5000/developers/${id}`, {
        method: "DELETE"
      });

      setDevelopers(developers.filter(developer => developer.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDevelopers = async () => {
    try {
      const response = await fetch("http://localhost:5000/developers");
      const jsonData = await response.json();

      setDevelopers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {developers.map(developer => (
            <tr key={developer.id}>
              <td>{developer.name}</td>
              <td>
                <EditDeveloper developer={developer} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDeveloper(developer.id)}
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

export default ListDevelopers;