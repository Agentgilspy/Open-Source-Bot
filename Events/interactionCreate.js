const Client = require('../Client/client')
const { Interaction } = require('discord.js')
/**
 *
 * @param {Client} bot
 * @param {Interaction} interaction
 */
module.exports.execute = async (bot, interaction) => {
	if (!interaction.isCommand()) return

	console.log(bot.commands)
	console.log(interaction.commandName)
	if (!bot.commands.has(interaction.commandName)) return

	bot.commands.get(interaction.commandName).slashexecute(bot, interaction)
}
