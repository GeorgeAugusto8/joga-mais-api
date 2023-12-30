/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programacao', {
    id_programacao: {
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
    id_time: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'time',
        key: 'id_time'
      }
    },
    dia: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'programacao'
  });
};
