const db = require("../database/db")
module.exports = app => {
    app.get("/todos", async (req, res) => {
        let resultado = await db.query("SELECT * FROM todos",(error, result) => {
            if(error){
                res.send(error);
            }
            resultado = result.rows;
            res.send(resultado);
        })
    });
}