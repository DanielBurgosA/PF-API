const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("donation",
        {
            id:{
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement:true
            },
            amount: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
          },
          { timestamps: false }
    )
}