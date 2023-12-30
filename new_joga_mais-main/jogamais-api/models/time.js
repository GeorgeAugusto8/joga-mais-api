/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time', {
    id_time: {
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
    id_endereco: {
      type: DataTypes.STRING(32),
      allowNull: true,
      references: {
        model: 'endereco',
        key: 'id_endereco'
      }
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sigla: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    fundacao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    foto_escudo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modalidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    genero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    perfil_time_campo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    perfil_time_quadro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    historia_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'time'
  });
};
