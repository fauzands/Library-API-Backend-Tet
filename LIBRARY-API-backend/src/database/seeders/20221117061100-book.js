'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', [
      {
        
        code: "JK-45",
        title: "Harry Potter",
        author: "J.K Rowling",
        stock: 2,
        borrowed:0,
        available:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        
        code: "SHR-1",
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        stock: 2,
        borrowed:0,
        available:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        
        code: "TW-11",
        title: "Twilight",
        author: "Stephenie Meyer",
        stock: 2,
        borrowed:0,
        available:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        
        code: "HOB-83",
        title: "The Hobbit, or There and Back Again",
        author: "J.R.R. Tolkien",
        stock: 2,
        borrowed:0,
        available:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        
        code: "NRN-7",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        stock: 2,
        borrowed:0,
        available:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};