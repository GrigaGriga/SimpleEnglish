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
        {
          title: 'Семья',
          url:'https://avatars.mds.yandex.net/i?id=41e30023ca21fc0ba1b38c1c8d52e3ad626afef9-5102997-images-thumbs&n=13',
        },
        {
          title: 'Дом',
          url:'https://avatars.mds.yandex.net/i?id=6794e27ae269d6268cf3fbf0b751aeaa_l-6974755-images-thumbs&n=13',
        },
        {
          title: 'Природа ',
          url:'https://avatars.mds.yandex.net/i?id=ba05c5a3615a58c6da2def145a54e120f1a5a9a9-5477655-images-thumbs&n=13',
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
        { rus: 'самолет', eng: 'airplane', wordCardId: 2 },
        { rus: 'багаж', eng: 'luggage', wordCardId: 2 },
        { rus: 'паспорт', eng: 'passport', wordCardId: 2 },
        { rus: 'билет', eng: 'ticket', wordCardId: 2 },
        { rus: 'взлетная полоса', eng: 'runway', wordCardId: 2 },
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
        { rus: 'Мать', eng: 'Mother', wordCardId: 4 },
        { rus: 'Отец', eng: 'Father', wordCardId: 4 },
        { rus: 'Брат', eng: 'Brother', wordCardId: 4 },
        { rus: 'Сестра', eng: 'Sister', wordCardId: 4 },
        { rus: 'Дедушка', eng: 'Grandfather', wordCardId: 4 },
        { rus: 'Бабушка', eng: 'Grandmother', wordCardId: 4 },
        { rus: 'Сын', eng: 'Son', wordCardId: 4 },
        { rus: 'Дочь', eng: 'Daughter', wordCardId: 4 },
        { rus: 'Дядя', eng: 'Uncle', wordCardId: 4 },
        { rus: 'Комната', eng: 'Room', wordCardId: 5 },
        { rus: 'Кухня', eng: 'Kitchen', wordCardId: 5 },
        { rus: 'Ванная', eng: 'Bathroom', wordCardId: 5 },
        { rus: 'Гостиная', eng: 'Living room', wordCardId: 5 },
        { rus: 'Спальня', eng: 'Bedroom', wordCardId: 5 },
        { rus: 'Стол', eng: 'Table', wordCardId: 5 },
        { rus: 'Стул', eng: 'Chair', wordCardId: 5 },
        { rus: 'Кровать', eng: 'Bed', wordCardId: 5 },
        { rus: 'Окно', eng: 'Window', wordCardId: 5 },
        { rus: 'Дерево', eng: 'Tree', wordCardId: 6 },
        { rus: 'Цветок', eng: 'Flower', wordCardId: 6 },
        { rus: 'Река', eng: 'River', wordCardId: 6 },
        { rus: 'Море', eng: 'Sea', wordCardId: 6 },
        { rus: 'Гора', eng: 'Mountain', wordCardId: 6 },
        { rus: 'Небо', eng: 'Sky', wordCardId: 6 },
        { rus: 'Солнце', eng: 'Sun', wordCardId: 6 },
        { rus: 'Луна', eng: 'Moon', wordCardId: 6 },
        { rus: 'Звезда', eng: 'Star', wordCardId: 6 },
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
