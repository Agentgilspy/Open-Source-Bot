const Client = require('./Client/client')
const { Token, Prefix } = require('./config.json')

const bot = new Client(Token, Prefix)

bot.start()
