import express from "express";
// npm install consign --save
import consign from "consign";

const PORT = 3000;

const app = express();

app.set("json spaces", 4);

consign()
.include("models")
.then("routes")
.into(app);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));