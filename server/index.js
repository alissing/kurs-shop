require('dotenv').config()
const sequelize = require('./db')
const express = require('express') // вызываем модуль

const PORT = process.env.PORT || 5000

const app = express() // создаем объект путем выхова функции экспресс


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync() // сверяет состояние БД со схемой данных
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()