const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

// Conexão com o banco de dados
const db = new sqlite3.Database("./db.sqlite");

// Rota para listar todos os pontos de coleta
router.get("/", (req, res) => {
  db.all("SELECT * FROM pontos_coleta", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Rota para cadastrar um novo ponto de coleta
router.post("/", (req, res) => {
  const { name, type, address, cep, lat, lng, image } = req.body;

  if (!name || !type || !address || !cep || !lat || !lng) {
    return res
      .status(400)
      .json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
  }

  const query = `
    INSERT INTO pontos_coleta (name, type, address, cep, lat, lng, image)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [name, type, address, cep, lat, lng, image];

  db.run(query, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, ...req.body });
  });
});

// Rota para atualizar um ponto de coleta
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, address, cep, lat, lng, image } = req.body;

  if (!name || !type || !address || !cep || !lat || !lng) {
    return res
      .status(400)
      .json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
  }

  const query = `
    UPDATE pontos_coleta
    SET name = ?, type = ?, address = ?, cep = ?, lat = ?, lng = ?, image = ?
    WHERE id = ?
  `;
  const params = [name, type, address, cep, lat, lng, image, id];

  db.run(query, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Ponto de coleta não encontrado." });
    }
    res.json({ message: "Ponto de coleta atualizado com sucesso." });
  });
});

// Rota para deletar um ponto de coleta
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM pontos_coleta WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Ponto de coleta não encontrado." });
    }
    res.json({ message: "Ponto de coleta deletado com sucesso." });
  });
});

module.exports = router;
