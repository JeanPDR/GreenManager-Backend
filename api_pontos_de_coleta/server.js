const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const coletaRoutes = require("./routes/coleta");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/pontos", coletaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
