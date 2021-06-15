const Client = require('../../Client/client')
const { Message } = require('discord.js')
module.exports = {
	/**
	 *
	 * @param {Client} bot
	 * @param {Message} message
	 * @param {String[]} args
	 */
	async execute(bot, message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.reply('You cannot use that')

		const number = parseInt(args[0]) + 1 // To Include the Command Message

		try {
			await message.channel.bulkDelete(number)

			message.reply(`Deleted ${number} messages`)
		} catch (error) {
			message.reply(error)
		}
	},
}
