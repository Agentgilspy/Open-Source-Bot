const Client = require('../../Client/client')
const { Message } = require('discord.js')
module.exports = {
	/**
	 *
	 * @param {Client} bot
	 * @param {Message} message
	 * @param {String[]} args
	 */
	execute(bot, message, args) {
		if (!message.member.hasPermission('BAN_MEMBERS'))
			return message.reply('You cannot use that')
		const id = bot.getid(message)

		if (!id) return message.reply('Please Mention a Member to ban')

		args.shift()
		const reason = args.join(' ') || 'No Reason Provided'
	},
}
