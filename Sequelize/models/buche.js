'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Buche extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Buche.init({
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        gout: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Buche',
    });
    return Buche;
};