const keepAlive = require("./server")
const dotenv = require('dotenv');
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
   console.log(`Enabled 24/7 on ${client.user.username}`)
})

keepAlive()
client.login(process.env.TOKEN);
