

const CardService = require('../services/Card.service')
const { formatResponse } = require('../utils/formatResponse')

class CardController {
  // * контроллер на получение всех
  static async getAll(req, res) {

    try {
      const result = await CardService.getAllCardsBmw()
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Все темы викторины',
        data: result
      }))
    } catch (error) {
      console.log(error)
      res.status(400).json(formatResponse({
        statusCode: 400, message: 'У тебя нет прав',
        error: error.message
      }))
    }
  }
  // * контроллер на получение одной карточки 
  // & ищем по id?
  static async getOne(req, res) {
    try {
      const { id } = req.params
      const card = await CardService.getOnecard(id)
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Один пользователь',
        data: card
      }))
    } catch (error) {
      console.log(error)
      res.status(401).json(formatResponse({
        statusCode: 401, message: 'Не удалось получить карточку',
        error: error.message
      }))
    }
  }


}

module.exports = CardController