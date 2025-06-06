const UserService = require("../services/User.service");
const { formatResponse } = require("../utils/formatResponse");
const UserValidator = require("../utils/User.validator");

// const { format } = require("morgan");

class UserController {
  static async getAll(req, res) {
    try {
      const result = await UserService.getAllUsers();
      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: "Все пользователи",
          data: result,
        })
      );
    } catch (error) {
      console.log(error);
      res.status(501).json(
        formatResponse({
          statusCode: 501,
          message: "Нет доступа",
          error: error.message,
        })
      );
    }
  }

  // ^ ищет по id -  сменить на name
  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getOneUser(id);
      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: "Один пользователь",
          data: user,
        })
      );
    } catch (error) {
      console.log(error);
      res.status(502).json(
        formatResponse({
          statusCode: 502,
          message: "Не удалось получить пользователя",
          error: error.message,
        })
      );
    }
  }

  static async register(req, res) {
    try {
      const { isValid, error } = await UserValidator.validate({
        login,
        mail,
        password,
      });
      if (!isValid) {
        res.status(400).json(
          formatResponse({
            statusCode: 400,
            message: "Регистрация не прошла",
            error,
          })
        );
      } else {
        const newUser = await UserService.registerUser({
          login,
          mail,
          password,
        });
        console.log("user:", newUser);
        res.status(200).json(
          formatResponse({
            statusCode: 200,
            message: "Пользователь успешно зарегистрирован",
            data: user,
          })
        );
      }
    } catch (error) {
      console.log(error);
      res.status(503).json(
        formatResponse({
          statusCode: 503,
          message: "Не удалось создать пользователя",
          error: error.message,
        })
      );
    }
  }
  // *  контроллер на удаление
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await UserService.deleteUser(id);
      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: "Пользователь успешно удалён",
          data: result,
        })
      );
    } catch (error) {
      console.log(error);
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: "Не удалось удалить пользователя",
          error: error.message,
        })
      );
    }
  }
  // * обновление - возможно нужно передавать поле score
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { login, mail, password } = req.body;
      const updatedUser = await UserService.updateUser(id, {
        login,
        mail,
        password,
      });
      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: "Пользователь успешно обновлён",
          data: updatedUser,
        })
      );
    } catch (error) {
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: "Не удалось обновить пользователя",
          error: error.message,
        })
      );
    }
  }
}

module.exports = UserController;
