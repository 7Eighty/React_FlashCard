'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Bob",
          email: "bob@mail.com",
          password: "Qqqq1qq!qq",
          score: 1000,
        },
        {
          name: "Jon",
          email: "jon@mail.com",
          password: "Qqqq1qqq!q",
          score: 800,
        },
        {
          name: "Kayte",
          email: "kayte@mail.com",
          password: "Qqqq1qq11!q",
          score: 100,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
