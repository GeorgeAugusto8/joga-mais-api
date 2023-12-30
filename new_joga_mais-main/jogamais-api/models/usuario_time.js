/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_time', {
    id_usuario_time: {
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
    id_usuario: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_time: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'time',
        key: 'id_time'
      }
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    posicao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero_camisa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    funcao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'usuario_time'
  });
};
