const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("admin", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        admin_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false

        },
        admin_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}