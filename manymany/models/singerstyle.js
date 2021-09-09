'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SingerStyle extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            SingerStyle.belongsTo(models.Singer);
            SingerStyle.belongsTo(models.Style);
        }
    };
    SingerStyle.init({}, {
        sequelize,
        modelName: 'SingerStyle',
    });
    return SingerStyle;
};