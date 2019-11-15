
exports.createArticle = (req, res, next) => {};
exports.createComment = (req, res, next) => {};
exports.getArticle = (req, res, next) => {
    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
};
exports.modifyArticle = (req, res, next) => {};
exports.deleteArticle = (req, res, next) => {};