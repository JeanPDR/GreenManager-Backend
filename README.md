# GreenManager Backend 🌿

Bem-vindo ao **GreenManager Backend**, uma API para gerenciar pontos de coleta sustentáveis. Este projeto utiliza Node.js e SQLite para criar, listar, atualizar e deletar pontos de coleta. Ele é ideal para aplicativos e sites que promovem sustentabilidade e coleta seletiva.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework para criar APIs RESTful.
- **SQLite**: Banco de dados leve e eficiente.

---

## 📂 Estrutura do Projeto

```plaintext
GreenManager-Backend/
├── routes/                # Rotas da API
│   └── coleta.js          # Rotas relacionadas aos pontos de coleta
├── db.sqlite              # Banco de dados SQLite
├── index.js               # Arquivo principal da API
├── seed.js                # Script para popular o banco de dados
├── swaggerConfig.js       # Configuração para documentação com Swagger
├── package.json           # Dependências do projeto
├── README.md              # Documentação do projeto
├── vercel.json            # Configuração para deploy na Vercel
```

---

## 🛠️ Funcionalidades

- **Listar Pontos de Coleta**: Obtenha todos os pontos cadastrados.
- **Cadastrar um Ponto de Coleta**: Adicione um novo ponto com nome, endereço, tipo, CEP, latitude, longitude e imagem.
- **Atualizar um Ponto de Coleta**: Modifique os dados de um ponto existente.
- **Deletar um Ponto de Coleta**: Remova um ponto do banco de dados.

---

## 🖥️ Endpoints da API

### Base URL:

`http://localhost:3000/api/pontos`

### 1. **Listar Pontos**

**GET** `/api/pontos`

- **Descrição**: Retorna todos os pontos de coleta.
- **Resposta**:

```json
[
  {
    "id": 1,
    "name": "Ponto de Coleta 1",
    "type": "reciclaveis",
    "address": "Rua Nova, 123",
    "cep": "12345-678",
    "lat": -23.5505,
    "lng": -46.6333,
    "image": "https://example.com/image.jpg"
  }
]
```

### 2. **Cadastrar um Ponto**

**POST** `/api/pontos`

- **Corpo da Requisição**:

```json
{
  "name": "Ponto de Coleta 2",
  "type": "organicos",
  "address": "Av. Principal, 456",
  "cep": "20040-001",
  "lat": -22.906847,
  "lng": -43.172896,
  "image": "https://example.com/image2.jpg"
}
```

- **Resposta**:

```json
{
  "id": 2,
  "name": "Ponto de Coleta 2",
  "type": "organicos",
  "address": "Av. Principal, 456",
  "cep": "20040-001",
  "lat": -22.906847,
  "lng": -43.172896,
  "image": "https://example.com/image2.jpg"
}
```

### 3. **Atualizar um Ponto**

**PUT** `/api/pontos/:id`

- **Parâmetros**: `id` (ID do ponto a ser atualizado)
- **Corpo da Requisição**:

```json
{
  "name": "Ponto de Coleta Atualizado",
  "type": "eletronicos",
  "address": "Av. Atualizada, 123",
  "cep": "20040-001",
  "lat": -22.906847,
  "lng": -43.172896,
  "image": "https://example.com/image3.jpg"
}
```

- **Resposta**:

```json
{
  "id": 2,
  "name": "Ponto de Coleta Atualizado",
  "type": "eletronicos",
  "address": "Av. Atualizada, 123",
  "cep": "20040-001",
  "lat": -22.906847,
  "lng": -43.172896,
  "image": "https://example.com/image3.jpg"
}
```

### 4. **Deletar um Ponto**

**DELETE** `/api/pontos/:id`

- **Parâmetros**: `id` (ID do ponto a ser deletado)
- **Resposta**:

```json
{ "message": "Ponto de coleta deletado com sucesso!" }
```

---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/JeanPDR/GreenManager-Backend.git
   cd GreenManager-Backend
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**:

   - Crie o banco SQLite:
     ```bash
     node seed.js
     ```

4. **Inicie o servidor**:

   ```bash
   node index.js
   ```

5. **Acesse a API**:
   - A API estará disponível em: `http://localhost:3000`

---

## 🛠️ Contribuindo

1. Faça um fork do projeto.
2. Crie um branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m 'Minha nova feature'
   ```
4. Envie o código:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

## 📞 Contato

- **Autor**: [JeanPDR](https://github.com/JeanPDR) [Juan Santos](https://github.com/Juan-s-moreira)

Contribua e ajude a tornar o mundo mais sustentável! 🌱
