'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Matieres', [{
            name: "Français",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "Maths",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "Histoire",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: "Biologie",
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Matieres', null, {});
    }
};