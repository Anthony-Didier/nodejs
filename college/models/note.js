'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Note extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Note.belongsTo(models.Eleve)
            Note.belongsTo(models.Matiere)
        }
    };
    Note.init({
        note: DataTypes.FLOAT,
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Note',
    });
    return Note;
};