'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards', [
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
        }
      ],
      {},
    )

    await queryInterface.bulkInsert(
      'Words', [
        {rus: "яблоко", eng: "apple", cardId:1},
        {rus: "хлеб", eng: "bread", cardId:1},
        {rus: "сыр", eng: "cheese", cardId:1},
        {rus: "рыба", eng: "fish", cardId:1},
        {rus: "мясо", eng: "meat", cardId:1},
        {rus: "суп", eng: "soup", cardId:1},
        {rus: "рис", eng: "rice", cardId:1},
        {rus: "картофель", eng: "potato", cardId:1},
        {rus: "салат", eng: "salad", cardId:1},
        {rus: "морковь", eng: "carrot", cardId:1},
          {rus: "самолет", eng: "airplane", cardId: 2},
          {rus: "багаж", eng: "luggage", cardId: 2},
          {rus: "паспорт", eng: "passport", cardId: 2},
          {rus: "билет", eng: "ticket", cardId: 2},
          {rus: "взлетная полоса", eng: "runway", cardId: 2},
          {rus: "значок", eng: "icon", cardId: 2},
          {rus: "отправление", eng: "departure", cardId: 2},
          {rus: "прибытие", eng: "arrival", cardId: 2},
          {rus: "терминал", eng: "terminal", cardId: 2},
          {rus: "таможня", eng: "customs", cardId: 2},
          {rus: "привет", eng: "hello", cardId: 3},
          {rus: "как тебя зовут?", eng: "what's your name?", cardId: 3},
          {rus: "меня зовут...", eng: "my name is...", cardId: 3},
          {rus: "откуда ты?", eng: "where are you from?", cardId: 3},
          {rus: "я из...", eng: "I am from...", cardId: 3},
          {rus: "рад познакомиться", eng: "nice to meet you", cardId: 3},
          {rus: "сколько тебе лет?", eng: "how old are you?", cardId: 3},
          {rus: "мне ... лет", eng: "I am ... years old", cardId: 3},
          {rus: "чем ты занимаешься?", eng: "what do you do?", cardId: 3},
          {rus: "я работаю в...", eng: "I work at...", cardId: 3},
      ],
      {},
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
