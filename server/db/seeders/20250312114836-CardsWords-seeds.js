'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          title: 'Еда',
          url:'https://img.freepik.com/premium-photo/food-table-autumn-food-assortment-top-view-free-space-your-text_187166-5580.jpg',
        },
        {
          title: 'Аэропорт',
          url:'https://minio.nplus1.ru/app-images/160245/e80da31e04852135a4db44be84f2d70e.jpg',
        },
        {
          title: 'Знакомство',
          url:'https://lim-english.com/uploads/images/all/img_articles_new/znakomstvo.jpg',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        { rus: 'яблоко', eng: 'apple', wordCardId: 1 },
        { rus: 'хлеб', eng: 'bread', wordCardId: 1 },
        { rus: 'сыр', eng: 'cheese', wordCardId: 1 },
        { rus: 'рыба', eng: 'fish', wordCardId: 1 },
        { rus: 'мясо', eng: 'meat', wordCardId: 1 },
        { rus: 'суп', eng: 'soup', wordCardId: 1 },
        { rus: 'рис', eng: 'rice', wordCardId: 1 },
        { rus: 'картофель', eng: 'potato', wordCardId: 1 },
        { rus: 'салат', eng: 'salad', wordCardId: 1 },
        { rus: 'морковь', eng: 'carrot', wordCardId: 1 },
        { rus: 'самолет', eng: 'airplane', wordCardId: 2 },
        { rus: 'багаж', eng: 'luggage', wordCardId: 2 },
        { rus: 'паспорт', eng: 'passport', wordCardId: 2 },
        { rus: 'билет', eng: 'ticket', wordCardId: 2 },
        { rus: 'взлетная полоса', eng: 'runway', wordCardId: 2 },
        { rus: 'значок', eng: 'icon', wordCardId: 2 },
        { rus: 'отправление', eng: 'departure', wordCardId: 2 },
        { rus: 'прибытие', eng: 'arrival', wordCardId: 2 },
        { rus: 'терминал', eng: 'terminal', wordCardId: 2 },
        { rus: 'таможня', eng: 'customs', wordCardId: 2 },
        { rus: 'привет', eng: 'hello', wordCardId: 3 },
        { rus: 'как тебя зовут?', eng: "what's your name?", wordCardId: 3 },
        { rus: 'меня зовут...', eng: 'my name is...', wordCardId: 3 },
        { rus: 'откуда ты?', eng: 'where are you from?', wordCardId: 3 },
        { rus: 'я из...', eng: 'I am from...', wordCardId: 3 },
        { rus: 'рад познакомиться', eng: 'nice to meet you', wordCardId: 3 },
        { rus: 'сколько тебе лет?', eng: 'how old are you?', wordCardId: 3 },
        { rus: 'мне ... лет', eng: 'I am ... years old', wordCardId: 3 },
        { rus: 'чем ты занимаешься?', eng: 'what do you do?', wordCardId: 3 },
        { rus: 'я работаю в...', eng: 'I work at...', wordCardId: 3 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
