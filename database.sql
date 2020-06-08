CREATE DATABASE pes;

CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE developers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  client_id INTEGER REFERENCES clients (id)  
);

ALTER TABLE client RENAME TO clients;