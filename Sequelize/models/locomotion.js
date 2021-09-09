'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Locomotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Locomotion.belongsTo(models.Human)
        }
    };
    Locomotion.init({
        name: DataTypes.STRING,
        nbWheels: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Locomotion',
    });
    return Locomotion;
};