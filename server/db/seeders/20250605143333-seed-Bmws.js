'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Bmws',
      [
        {
          question: 'Что означает аббревиатура BMW?',
          answer: JSON.stringify(
            {
              A: 'Брутальный Механический Вундеркиндер',
              B: 'Быстро Мчится Вбок',
              C: 'Bayerische Motoren Werke',
              D: 'Больше Мука в Выходные',
            },
          ),
          rigthAns: 'C',
        },
        {
          question: 'Какой у BMW задний привод?',
          answer: JSON.stringify(
            {
              A: 'Фиктивный',
              B: 'Полный',
              C: 'Передний',
              D: 'Задний',
            },
          ),
          rigthAns: 'D',
        },
        {
          question: 'Почему BMW ломается чаще других?',
          answer: JSON.stringify(
            {
              A: 'Потому что душа у неё нежная',
              B: 'Конструкторы любят сюрпризы',
              C: 'Потому что так задумано',
              D: 'Потому что водитель слишком дерзкий',
            },
          ),
          rigthAns: 'A',
        },
        {
          question: 'Какая модель считается легендой BMW?',
          answer: JSON.stringify(
            {
              A: 'X5',
              B: 'E30 M3',
              C: 'i8',
              D: 'Z4',
            },
          ),
          rigthAns: 'B',
        },
        {
          question: 'Что часто не работает в старой BMW?',
          answer: JSON.stringify(
            {
              A: 'Фары',
              B: 'Климат',
              C: 'Бортовой компьютер',
              D: 'Всё сразу',
            },
          ),
          rigthAns: 'D',
        },
        {
          question: 'Какой звук считается нормой для владельца BMW?',
          answer: JSON.stringify(
            {
              A: 'Скрежет тормозов',
              B: 'Щелчки подвески',
              C: 'Гул редуктора',
              D: 'Все перечисленные',
            },
          ),
          rigthAns: 'D',
        },
        {
          question: 'Какой стиль езды у BMW по легенде?',
          answer: JSON.stringify(
            {
              A: 'Осторожный',
              B: 'Спокойный',
              C: 'Занос с матами',
              D: 'Без поворотников',
            },
          ),
          rigthAns: 'D',
        },
        {
          question: 'Какой логотип у BMW символизирует?',
          answer: JSON.stringify(
            {
              A: 'Пропеллер самолета',
              B: 'Крыло ангела',
              C: 'Шестерёнку',
              D: 'Сыр с дырками',
            },
          ),
          rigthAns: 'A',
        },
        {
          question: 'Что обязательно должно быть у владельца BMW?',
          answer: JSON.stringify(
            {
              A: 'Толстый кошелёк',
              B: 'Гараж с ямой',
              C: 'Психическая устойчивость',
              D: 'Все перечисленные',
            },
          ),
          rigthAns: 'D',
        },
        {
          question: 'Главное, зачем берут BMW?',
          answer: JSON.stringify(
            {
              A: 'Для души',
              B: 'Для понтов',
              C: 'Чтобы страдать красиво',
              D: 'Чтобы жить на грани',
            },
          ),
          rigthAns: 'C',
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
