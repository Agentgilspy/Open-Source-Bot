const Client = require('../Client/client')
const { Message } = require('discord.js')

module.exports = {
	/**
	 *
	 * @param {Client} bot
	 * @param {Message} message
	 */
	execute(bot, message) {
		if (message.channel.type === 'dm') return
		if (message.author.bot) return

		const prefix = '$'
		const msg = message.content.toLowerCase()

		if (!msg.startsWith(prefix)) return

		const args = message.content.slice(prefix.length).trim().split(/ +/g)
		const command = args.shift().toLowerCase()

		if (bot.commands.has(command)) {
			bot.commands.get(command).execute(bot.message, args)
		}
	},
}
