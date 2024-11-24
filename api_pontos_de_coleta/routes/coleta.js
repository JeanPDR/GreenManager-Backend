const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

const db = new sqlite3.Database("./db.sqlite");

/**
 * @swagger
 * tags:
 *   name: Pontos de Coleta
 *   description: Gerenciamento dos pontos de coleta
 */

/**
 * @swagger
 * /api/pontos:
 *   get:
 *     summary: Lista todos os pontos de coleta
 *     tags: [Pontos de Coleta]
 *     responses:
 *       200:
 *         description: Lista de pontos de coleta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do ponto de coleta
 *                   name:
 *                     type: string
 *                     description: Nome do ponto de coleta
 *                   type:
 *                     type: string
 *                     description: Tipo do ponto de coleta
 *                   address:
 *                     type: string
 *                     description: Endereço do ponto de coleta
 *                   cep:
 *                     type: string
 *                     description: CEP do ponto de coleta
 *                   lat:
 *                     type: number
 *                     description: Latitude
 *                   lng:
 *                     type: number
 *                     description: Longitude
 */
router.get("/", (req, res) => {
  db.all("SELECT * FROM pontos_coleta", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

/**
 * @swagger
 * /api/pontos:
 *   post:
 *     summary: Cadastra um novo ponto de coleta
 *     tags: [Pontos de Coleta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - address
 *               - cep
 *               - lat
 *               - lng
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do ponto de coleta
 *               type:
 *                 type: string
 *                 description: Tipo do ponto de coleta
 *               address:
 *                 type: string
 *                 description: Endereço do ponto de coleta
 *               cep:
 *                 type: string
 *                 description: CEP do ponto de coleta
 *               lat:
 *                 type: number
 *                 description: Latitude
 *               lng:
 *                 type: number
 *                 description: Longitude
 *               image:
 *                 type: string
 *                 description: URL da imagem (opcional)
 *     responses:
 *       201:
 *         description: Ponto de coleta cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do ponto de coleta criado
 *                 name:
 *                   type: string
 *                   description: Nome do ponto de coleta
 */
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

/**
 * @swagger
 * /api/pontos/{id}:
 *   put:
 *     summary: Atualiza um ponto de coleta
 *     tags: [Pontos de Coleta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do ponto de coleta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - address
 *               - cep
 *               - lat
 *               - lng
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               address:
 *                 type: string
 *               cep:
 *                 type: string
 *               lat:
 *                 type: number
 *               lng:
 *                 type: number
 *               image:
 *                 type: string
 *                 description: URL da imagem (opcional)
 *     responses:
 *       200:
 *         description: Ponto de coleta atualizado com sucesso
 *       404:
 *         description: Ponto de coleta não encontrado
 */
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

/**
 * @swagger
 * /api/pontos/{id}:
 *   delete:
 *     summary: Deleta um ponto de coleta
 *     tags: [Pontos de Coleta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do ponto de coleta
 *     responses:
 *       200:
 *         description: Ponto de coleta deletado com sucesso
 *       404:
 *         description: Ponto de coleta não encontrado
 */
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
