const db = require("../config/sequelize");
const Sequelize = require("sequelize");

const Admin = db.define(
    "Admin",
    {
        id: {
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
        },
        senha: {
            type: Sequelize.DataTypes.STRING(80),
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
)

module.exports = Admin;