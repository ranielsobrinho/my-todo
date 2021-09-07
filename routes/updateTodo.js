const db = require("../database/db")

module.exports = app => {
    app.put("/newTodo/:id", async (req, res) => {
        try {
            const {id} = req.params;
            const {content, done} = req.body;
            let updatedTodo = await db.query("UPDATE todos SET content = $1, done = $2 WHERE id = $3;",[content, done, id]);
            if(!done){
                updatedTodo = await db.query("UPDATE todos SET content = $1 WHERE id = $2;",[content, id]);
            } 
            console.log("Atualização de dados feita com sucesso");
            res.send(updatedTodo.rows[0]);
        } catch (error) {
            console.log(error)
        }
    })
}