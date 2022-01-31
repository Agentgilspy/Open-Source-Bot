const Client = require('../Client/client')
const { REST } = require('@discordjs/rest')

const { Routes } = require('discord-api-types/v9')
/**
 *
 * @param {Client} bot
 */
module.exports.execute = async (bot) => {
	console.log(`${bot.user.tag} has logged in`)

	bot.user.setActivity('Put something here', { type: 'WATCHING' })

	try {
		const rest = new REST({ version: '9' }).setToken(bot.token)

		await rest.put(Routes.applicationGuildCommands(bot.user.id, ''), {
			body: bot.slashcommands,
		})
		console.log('Refreshed Slash Commands')
	} catch (error) {
		console.log(error)
	}
}
