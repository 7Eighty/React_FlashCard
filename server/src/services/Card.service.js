

const { Bmw } = require('../../db/models')


class CardService {
  // * получение всех карточек
  static async getAllCardsBmw() {
    const cards = await Bmw.findAll()
    const result = cards.map((el) => el.get({ plain: true }))
    return result
  }

  //   static async getAllCardsElbrus() {
  //   const cards = await Elbrus.findAll()
  //   const result = cards.map((el) => el.get({ plain: true }))
  //   return result
  // }

  //   static async getAllCardsGeography() {
  //   const cards = await Geography.findAll()
  //   const result = cards.map((el) => el.get({ plain: true }))
  //   return result
  // }

  // * Получение одноq карточки
  static async getOneCard(question) {
    const card = await Bmw.findOne(question)
    const result = card.get({ plain: true })
    return result
  }

}

module.exports = CardService