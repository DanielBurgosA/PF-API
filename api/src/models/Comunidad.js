const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("comunidad", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    comunidad_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comunidad_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comunidad_location: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
