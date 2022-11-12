const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send('Hello World')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Made by Chill Bread")
  })
}

module.exports = keepAlive
