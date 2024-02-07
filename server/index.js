require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const express = require('express') // вызываем модуль

const PORT = process.env.PORT || 5000

const app = express() // создаем объект путем выхова функции экспресс
app.use(cors())
app.use(express.json())// для парсинга json формата

app.get('/', (req, res) => {
  res.status(200).json({ message: "работает!!!" })
})

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