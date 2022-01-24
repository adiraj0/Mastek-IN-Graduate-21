'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        bookName: 'Life of Pei',
        authorName: 'adiraj',
        publicationdate:new CURRENT_TIMESTAMP(),
       createdAt: new Date(),
       updatedAt: new Date()       

     },

     {
      bookName: 'Never Quit',
      authorName: 'shubham',
      publicationdate:new CURRENT_TIMESTAMP(),
      createdAt: new Date(),
      updatedAt: new Date()       
    },

    {

      bookName: 'Life',
      authorName: 'sonu',
      publicationdate:new CURRENT_TIMESTAMP(),
      createdAt: new Date(),
      updatedAt: new Date()       

    }

    ], {});
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
