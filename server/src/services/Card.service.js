

const { Card } = require('../db/models')

class CardService {
  // * получение всех карточек
  static async getAllCards() {
    const cards = await Card.findAll()
    const result = cards.map((el) => el.get({ plain: true }))
    return result
  }

  // * Получение одноq карточки
  static async getOneCard(id) {
    const card = await Card.findByPk(id)
    const result = card.get({ plain: true })
    return result
  }

}

module.exports = CardService