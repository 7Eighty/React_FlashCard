function getGreetings(req, res, next) {
  res.locals.greetings = 'Викторина!'
  console.log(res.locals)
  next()
} 

module.exports = getGreetings
