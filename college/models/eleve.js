'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Eleve extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Eleve.belongsTo(models.Classe)
            Eleve.hasMany(models.Note)
        }
    };
    Eleve.init({
        name: DataTypes.STRING,
        firstname: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Eleve',
    });
    return Eleve;
};