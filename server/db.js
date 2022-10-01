const knex = require("knex");

module.exports = knex({
    client: "postgres",
    connection: {
        host: "db",
        user: "admin",
        password: "admin-user4@",
        database: "admin",
    },
});
