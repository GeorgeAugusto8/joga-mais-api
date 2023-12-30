/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avaliacao', {
    id_avaliacao: {
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
    id_jogo: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'jogo',
        key: 'id_jogo'
      }
    },
    id_time_avaliado: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'time',
        key: 'id_time'
      }
    },
    respeito: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    quadra_campo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nivel_tecnico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    juiz: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pontualidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    elenco_completo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    wo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'avaliacao'
  });
};
