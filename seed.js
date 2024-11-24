const sqlite3 = require("sqlite3").verbose();

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database("./db.sqlite");

// Dados para o seed
const seedData = [
  {
    name: "Ponto de Coleta 1",
    type: "reciclaveis",
    address: "Rua das Flores, 123 - São Paulo, SP",
    cep: "01001-000",
    lat: -23.55052,
    lng: -46.633308,
    image: "https://example.com/image1.jpg",
  },
  {
    name: "Ponto de Coleta 2",
    type: "organicos",
    address: "Av. Principal, 456 - Rio de Janeiro, RJ",
    cep: "20040-001",
    lat: -22.906847,
    lng: -43.172896,
    image: "https://example.com/image2.jpg",
  },
  {
    name: "Ponto de Coleta 3",
    type: "eletronicos",
    address: "Praça da Liberdade, 789 - Belo Horizonte, MG",
    cep: "30140-010",
    lat: -19.916681,
    lng: -43.934493,
    image: "https://example.com/image3.jpg",
  },
  {
    name: "Ponto de Coleta 4",
    type: "reciclaveis",
    address: "Rua do Sol, 321 - Porto Alegre, RS",
    cep: "90040-001",
    lat: -30.034647,
    lng: -51.217658,
    image: "https://example.com/image4.jpg",
  },
  {
    name: "Ponto de Coleta 5",
    type: "organicos",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    cep: "01310-100",
    lat: -23.561414,
    lng: -46.655881,
    image: "https://example.com/image5.jpg",
  },
  {
    name: "Ponto de Coleta 6",
    type: "eletronicos",
    address: "Rua XV de Novembro, 150 - Curitiba, PR",
    cep: "80020-310",
    lat: -25.428356,
    lng: -49.273252,
    image: "https://example.com/image6.jpg",
  },
  {
    name: "Ponto de Coleta 7",
    type: "reciclaveis",
    address: "Praça da Sé, 200 - Salvador, BA",
    cep: "40020-000",
    lat: -12.9714,
    lng: -38.5124,
    image: "https://example.com/image7.jpg",
  },
  {
    name: "Ponto de Coleta 8",
    type: "organicos",
    address: "Av. Boa Viagem, 500 - Recife, PE",
    cep: "51011-000",
    lat: -8.11174,
    lng: -34.884874,
    image: "https://example.com/image8.jpg",
  },
  {
    name: "Ponto de Coleta 9",
    type: "eletronicos",
    address: "Rua das Palmeiras, 300 - Manaus, AM",
    cep: "69000-000",
    lat: -3.119027,
    lng: -60.021731,
    image: "https://example.com/image9.jpg",
  },
  {
    name: "Ponto de Coleta 10",
    type: "reciclaveis",
    address: "Rua das Estrelas, 400 - Brasília, DF",
    cep: "70000-000",
    lat: -15.794229,
    lng: -47.882166,
    image: "https://example.com/image10.jpg",
  },
];

// Inserir dados no banco
db.serialize(() => {
  const query = `
    INSERT INTO pontos_coleta (name, type, address, cep, lat, lng, image)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  seedData.forEach((data) => {
    db.run(query, [
      data.name,
      data.type,
      data.address,
      data.cep,
      data.lat,
      data.lng,
      data.image,
    ]);
  });

  console.log("Seed concluído com sucesso!");
});

// Fechar conexão com o banco
db.close();
