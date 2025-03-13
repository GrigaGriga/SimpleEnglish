const { Card } = require('../../../db/models');
class CardsServices {
  static async getAllCards() {
    console.log('sefsefesf')
    try {
      const cards = await Card.findAll();
      const cardsData = cards.map(card => card.get());
      console.log('получение карточек', cardsData);
      return cardsData;
    } catch (error) {
        console.error("Ошибка при получении карточек сервис:", error);
            throw error;
    }
  }
}

module.exports = CardsServices;
