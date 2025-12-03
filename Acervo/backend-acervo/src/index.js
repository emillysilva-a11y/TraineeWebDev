const dotenv = require("dotenv");
const app = require("./App");
const Loaders = require("./Loaders/index");

dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 2000;

app.listen(2000, () => console.log("Servidor rodando!"));
app.listen(2000, () => console.log("Banco de Dados inicializado!"))