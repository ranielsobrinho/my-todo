const db = require("../database/db");

module.exports = app => {
    app.delete("/delete/:id", async(req, res) =>{
        try{
            const {id} = req.params
            const deletedTodo = db.query("DELETE FROM todos WHERE id = $1",[id]);
            res.send("Deletado com sucesso") 
        }catch(error){
            res.send(error);
        }
    })
}