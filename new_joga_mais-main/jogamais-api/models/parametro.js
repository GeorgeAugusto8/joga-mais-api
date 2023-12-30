/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametro', {
    id_parametro: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    parametro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'parametro'
  });
};
