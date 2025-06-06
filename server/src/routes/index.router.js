const indexRouter = require('express').Router()

const cardRouter = require('./card.router')
const userRouter = require('./User.router')


indexRouter.use('/user', userRouter)
indexRouter.use('/main', cardRouter)

indexRouter.use((req, res) => {
  res.status(404).send('Страница не найдена');
});

module.exports = indexRouter
