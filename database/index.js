import { Sequelize } from "sequelize";

const connection = new Sequelize("MoviesDB", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('DESKTOP-NNP82TL\\SQLEXPRESS01');

db.run('CREATE TABLE usuarios (id INT, nombre TEXT)');

db.run('INSERT INTO usuarios (id, nombre) VALUES (?, ?)', [1, 'Ejemplo']);

db.all('SELECT * FROM usuarios', (error, rows) => {
  if (error) {
    console.error(error);
  } else {
    console.log(rows);
  }
});

const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
  db.all('SELECT * FROM usuarios', (error, rows) => {
    if (error) {
      res.status(500).json({ error: 'Error al consultar la base de datos' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(3000, () => {
  console.log('La API está escuchando en el puerto 3000');
});
