const db = require("../database/db")

module.exports = app => {
    app.get("/todos/:id", async (req, res) => {
        const {id} = req.params
        const {rows} = await db.getTodo('select * from todos where id = $1', [id]);
        res.send(rows[0])
    });
}
