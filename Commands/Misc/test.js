const { SlashCommandBuilder } = require('@discordjs/builders')
const { Client, Message, CommandInteraction } = require('discord.js')
module.exports = {
	name: 'test',
	description: 'Test',
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test bruh'),

	/**
	 * @param {Client} bot
	 * @param {Message} message
	 * @param {String[]} args
	 */
	execute(bot, message, args) {
		message.reply('test')
	},

	/**
	 * @param {Client} bot
	 * @param {CommandInteraction} interaction
	 */
	slashexecute(bot, interaction) {
		interaction.reply('test')
	},
}
