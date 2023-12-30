/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_admin', {
    id_usuario_admin: {
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
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    login: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    admin: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    cd_perfil: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'usuario_admin'
  });
};
