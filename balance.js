const Command = require("../../modules/Command.js");
const db = require('quick.db')

class balance extends Command {
  constructor(client) {
    super(client, {
      name: "balance",
      description: "Donne l'argent possédé.",
      usage: "balance",
      category: "Economie",
      aliases: ["money"]
    });
  }

  async run(message, args, client) {
    try {
      let user = message.mentions.users.first()  || message.author;

      let money = await db.fetch(`money_${user.id}`)
      if (money === null) money = 0;
      message.channel.send(`${user} you have ${money}$ !`)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = balance;