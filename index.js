const express = require("express")
const { readdirSync } = require("fs")
const { join } = require("path")
const cors = require('cors')
const app = express()

require('dotenv').config();

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

readdirSync(join(__dirname, "routes"))
  .filter((file) => {
    return file.indexOf(".") !== 0 && file.slice(-3) === ".js"
  })
  .forEach((file) => {
    const router = require(join(__dirname, "routes", file)).router
    app.use(router)
  })

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
