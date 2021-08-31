import express from "express";
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({status: "My API"}));

app.get("/todos", (req, res) => {
    res.json({
        todos: [
            {title: "Ir ao supermercado"},
            {title: "Ir ao shopping"}
        ]
    });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));