/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogo', {
    id_jogo: {
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
    id_time_1: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'time',
        key: 'id_time'
      }
    },
    id_time_2: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'time',
        key: 'id_time'
      }
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    gols_time_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gols_time_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'jogo'
  });
};
