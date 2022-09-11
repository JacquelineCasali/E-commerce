require('dotenv').config()

const database = {
    username: process.env.DB_USERNAME||"", // no windows e mac é root(senha vazio)
    password:process.env.DB_PASSWORD||"", 
    database:process.env.DB_DATABASE||"", 
    host:process.env.DB_HOST||"localhost", 
    dialect:process.env.DB_DIALECT||"mysql", 
}

module.exports = database;