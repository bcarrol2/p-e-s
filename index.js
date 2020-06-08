const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

app.use(cors());
app.use(express.json())

app.post("/clients", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newClient = await pool.query(
      "INSERT INTO clients (name, description) VALUES($1, $2) RETURNING *",
      [name, description]
    );

    res.json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/developers", async (req, res) => {
  try {
    const { name } = req.body;
    const newDeveloper = await pool.query(
      "INSERT INTO developers (name) VALUES($1) RETURNING *",
      [name]
    );

    res.json(newDeveloper.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/clients", async (req, res) => {
  try {
    const allClients = await pool.query("SELECT * FROM clients");
    res.json(allClients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/developers", async (req, res) => {
  try {
    const allDevelopers = await pool.query("SELECT * FROM developers");
    res.json(allDevelopers.rows);
  } catch (err) {
    console.error(err.message)
  }
});

app.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query("SELECT * FROM clients WHERE client_id = $1", [
      id
    ]);

    res.json(client.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/developers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const developer = await pool.query("SELECT * FROM developers WHERE id = $1", [
        id
    ]);

    res.json(developer.rows[0]);
  } catch (err) {
      console.error(err.message)
  }
});

app.put("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateClient = await pool.query(
      "UPDATE clients SET name = $1, description = $2 WHERE client_id = $3",
      [name, description, id]
    );

    res.json("Client successfully updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/developers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateDeveloper = await pool.query(
      "UPDATE developers SET name = $1 WHERE id = $2",
      [name, id]
    );

    res.json("Developer successfully updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteClient = await pool.query("DELETE FROM clients WHERE client_id = $1", [
      id
    ]);
    res.json("Client successfully deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/developers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDeveloper = await pool.query("DELETE FROM developers WHERE id = $1", [
        id
    ]);

    res.json("Developer successfully deleted")
  } catch (err) {
      console.error(err.message)
  }
});

app.listen(5000, () => {
    console.log("Server started on port:5000")
})