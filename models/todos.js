module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Estudar NodeJS"},
                {title: "Terminar o projeto"},
            ]);
        }
    }
}