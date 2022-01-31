const { Client, Intents } = require('discord.js')
const { readdirSync } = require('fs')

const intents = new Intents(['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'])
class Bot extends Client {
	constructor(Token, Prefix) {
		super({ intents: intents })
		this.login(Token)
		this.commands = new Map()

		this.prefix = Prefix

		this.slashcommands = []
	}

	start() {
		// Event Handler

		const events = readdirSync(`${process.cwd()}/Events`).map(
			(el) => el.split('.')[0]
		)

		for (const event of events) {
			const file = require(`../Events/${event}`)

			this.on(event, file.execute.bind(null, this))
		}

		// Command handler

		const categories = readdirSync(`${process.cwd()}/Commands`)

		for (const category of categories) {
			const commands = readdirSync(
				`${process.cwd()}/Commands/${category}`
			).map((el) => el.split('.')[0])

			for (const command of commands) {
				const file = require(`../Commands/${category}/${command}`)

				if (file.data) this.slashcommands.push(file.data)

				this.commands.set(command.toLowerCase(), file)
			}
		}
	}
}

module.exports = Bot
