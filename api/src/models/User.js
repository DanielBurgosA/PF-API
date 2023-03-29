const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("user", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1
        },
        googleId:{
            type: DataTypes.STRING,
            allowNull: true
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_lastname:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        hash:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        salt:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }, {timestamps: false})
}