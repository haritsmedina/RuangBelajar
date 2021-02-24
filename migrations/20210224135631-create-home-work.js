'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HomeWork', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectsId: {
        type: Sequelize.INTEGER,
        references : {
          model : {tableName: "Subjects"},
          key: "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      usersId: {
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: 'Users'},
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HomeWork');
  }
};