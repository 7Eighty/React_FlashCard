'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Geographies',
      [
        {
          question: 'Какой океан самый большой по площади?',
          answer: JSON.stringify(
            {
              A: 'Атлантический',
              B: 'Индийский',
              C: 'Тихий',
              D: 'Северный Ледовитый',
            },
          ),
          rigthAns: 'C',
        },
        {
          question: 'Самая высокая гора на Земле?',
          answer: JSON.stringify(
            { A: 'Килиманджаро', B: 'Эверест', C: 'Аконкагуа', D: 'Монблан' },
          ),
          rigthAns: 'B',
        },
        {
          question: 'Столица Канады?',
          answer: JSON.stringify({ A: 'Торонто', B: 'Оттава', C: 'Монреаль', D: 'Ванкувер' }),
          rigthAns: 'B',
        },
        {
          question: 'Какая страна самая большая по территории?',
          answer: JSON.stringify({ A: 'Канада', B: 'США', C: 'Россия', D: 'Китай' }),
          rigthAns: 'C',
        },
        {
          question: 'Через какую страну не проходит река Нил?',
          answer: JSON.stringify({ A: 'Судан', B: 'Египет', C: 'Эфиопия', D: 'Марокко' }),
          rigthAns: 'D',
        },
        {
          question: 'Какая пустыня считается самой жаркой на планете?',
          answer: JSON.stringify({ A: 'Сахара', B: 'Калахари', C: 'Гоби', D: 'Атакама' }),
          rigthAns: 'A',
        },
        {
          question: 'Где находится гора Фудзи?',
          answer: JSON.stringify({ A: 'Китай', B: 'Япония', C: 'Корея', D: 'Тайвань' }),
          rigthAns: 'B',
        },
        {
          question: 'Сколько материков на Земле?',
          answer: JSON.stringify( { A: '5', B: '6', C: '7', D: '8' }),
          rigthAns: 'C',
        },
        {
          question: 'Какое самое глубокое озеро в мире?',
          answer: JSON.stringify(
            { A: 'Виктория', B: 'Байкал', C: 'Титикака', D: 'Супериор' },
          ),
          rigthAns: 'B',
        },
        {
          question: 'Где находится мыс Доброй Надежды?',
          answer: JSON.stringify(
            {
              A: 'Австралия',
              B: 'Южная Африка',
              C: 'Чили',
              D: 'Новая Зеландия',
            },
          ),
          rigthAns: 'B',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
