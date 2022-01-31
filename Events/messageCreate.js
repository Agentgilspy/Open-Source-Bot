const Client = require('../Client/client')
const { Message } = require('discord.js')
/**
 *
 * @param {Client} bot
 * @param {Message} message
 */
module.exports.execute = async (bot, message) => {
	if (!message.guild) return

	if (!message.content.startsWith(bot.prefix)) return

	const args = message.content.slice(bot.prefix.length).split(/ +/g)
	const command = args.shift().toLowerCase()

	if (!bot.commands.has(command)) return

	bot.commands.get(command).execute(bot, message, args)

	console.log(`${message.author.tag} : ${message.content}`)
}
