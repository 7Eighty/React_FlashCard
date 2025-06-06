const morgan = require('morgan');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.router');



const app = express();

serverConfig(app);

const PORT = process.env.PORT || 3000;

app.use(morgan('dev')); // * подробное логирование запросов между клиентом и сервером в терминале
app.use(express.urlencoded({ extended: true })); // * читать данные из тела запросов. ! ИНАЧЕ В req.body БУДЕТ undefined
app.use(express.json()); // * читать JSON-данные из тела запросов req.body

app.use("/", indexRouter)



app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});