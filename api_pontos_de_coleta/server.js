const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const coletaRoutes = require("./routes/coleta");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig"); // Importe a configuração do Swagger

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/pontos", coletaRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});
