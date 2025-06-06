
const CardRouter = require('express').Router()


const CardController = require('../controllers/Card.controller')





//! адресa!
CardRouter.get('/', CardController.getAll)
CardRouter.get('/:id', CardController.getOne)
 

module.exports = CardRouter