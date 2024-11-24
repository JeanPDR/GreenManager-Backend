const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const coletaRoutes = require("./routes/coleta");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite todas as origens
app.use(bodyParser.json());

// Rotas
app.use("/api/pontos", coletaRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
