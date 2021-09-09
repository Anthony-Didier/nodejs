'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('SingerStyles', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                SingerId: {
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    allowNull: false,
                    references: {
                        // Normes sequalize à respecter : nom de table commence par 
                        // une majuscule et est au pluriel
                        model: 'Singers',
                        key: 'id'
                    },
                    unique: 'SingerStyle'
                },
                StyleId: {
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    allowNull: false,
                    references: {
                        model: 'Styles',
                        key: 'id'
                    },
                    unique: 'SingerStyle'
                },

                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
            // Evite qu'un singer ait plusieurs fois le même style et inversement
            .then(() => {
                return queryInterface.sequelize.query(
                    'ALTER TABLE `SingerStyles` ADD UNIQUE `unique_index`(`SingerId`,`StyleId`)'
                );
            });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('SingerStyles');
    }
};