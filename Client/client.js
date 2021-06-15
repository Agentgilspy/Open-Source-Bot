const { Client, Message } = require('discord.js')
const { readdirSync } = require('fs')

class Bot extends Client {
	constructor() {
		super()

		this.commands = new Map()
	}

	run(token, path) {
		const categories = readdirSync(path, '/Commands')

		for (category of categories) {
			const commands = readdirSync(
				path,
				'/Commands',
				`/${category}`
			).filter((name) =>
				name.endsWith('.js').map((command) => (command = command.split('.')[0]))
			)

			for (const command of commands) {
				const file = require(`../Commands/${category}/${command}`)
				this.commands.set(command, file)
			}
		}

		const events = readdirSync(path, '/Events')
			.filter((name) => name.endsWith('.js'))
			.map((event) => (event = event.split('.')[0]))

		for (const event of events) {
			const file = require(`../Events/${event}`)
			this.on(event, file.execute.bind(null, this))
		}

		this.login(token)
	}

	/**
	 *
	 * @param {Message} message
	 */
	getid(message) {
		const args = message.content.split(/ +/g)
		const member = message.mentions.members.first()

		let id

		if (member) id = member.id

		if (!member) [, id] = args

		if (Number.isNaN(id)) id = undefined

		return id
	}
}

module.exports = Bot
