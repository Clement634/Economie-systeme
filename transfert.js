const Command = require("../../modules/Command.js");
const db = require('quick.db')

class transfert extends Command {
  constructor(client) {
    super(client, {
      name: "transfert",
      description: "Transfert le montant souhaité à la personne souhaité.",
      usage: "transfert <user> <montant>",
      category: "Economie"
    });
  }

  async run(message, args, client) {
    try {
        let user = message.mentions.members.first()
        let member = db.fetch(`money_${message.author.id}`)

        if (!user) {
            return message.channel.send('Vous devez mentionné une personne.');
        }
        if (!args[1]) {
            return message.channel.send('Specifiez le montant !');
        }
        if (message.content.includes('-')) {
            return message.channel.send('Le montant doit être positif !')
        }
        if (member < 0) {
            return message.channel.send('Vous devez avoir de l\'argent pour faire un transfert.' )
        }
        message.channel.send(`${message.author}, vous venez de donner **${args[1]}**$ à ${user.user.username}`)
        db.add(`money_${user.id}, args[1]`)
        db.subtract(`money_${message.author.id}, args[1]`)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = transfert;