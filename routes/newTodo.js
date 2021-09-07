const db = require("../database/db")

module.exports = app => {
    app.post("/newTodo", async (req, res) => {
        try {
            const {content} = req.body;
            const newTodo = await db.query(`INSERT INTO todos (content) VALUES ('${content}') RETURNING *;`);
            console.log("Nova tarefa adicionada");
            res.send(newTodo.rows[0]);
        } catch (error) {
            console.error(error);
        }
    })
}