const { Card } = require('../../../db/models');
class CardsServices {
    static async getAllCards(id) {
        const cards = await Card.findAll({ where: { id }})
        return cards
    }
}

module.exports = CardsServices;