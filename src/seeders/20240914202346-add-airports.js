'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name : 'Netaji Subhash Chandra Bose International Airport',
        cityid : 1,
        createdat : new Date(),
        updatedat : new Date()
      },
      {
        name : 'Behala Airport',
        cityid : 1,
        createdat : new Date(),
        updatedat : new Date()
      },
      {
        name : 'Cooch Behar Airport',
        cityid : 1,
        createdat : new Date(),
        updatedat : new Date()
      },
      {
        name : 'Malda Airport',
        cityid : 1,
        createdat : new Date(),
        updatedat : new Date()
      },
      {
        name : 'Indira Gandhi International Airport',
        cityid : 5,
        createdat : new Date(),
        updatedat : new Date()
      }
    ],{});
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
