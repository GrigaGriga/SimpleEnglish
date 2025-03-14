const { Card } = require('../../../db/models');
class CardsServices {
  static async getAllCards() {
    try {
      const cards = await Card.findAll();
      const cardsData = cards?.map(card => card.get());
      return cardsData;
    } catch (error) {
        console.error("Ошибка при получении карточек сервис:", error);
            throw error;
    }
  }
}

module.exports = CardsServices;
