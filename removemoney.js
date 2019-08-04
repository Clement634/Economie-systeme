const Command = require("../../modules/Command.js");
const db = require('quick.db')

class removemoney extends Command {
  constructor(client) {
    super(client, {
      name: "removemoney",
      description: "Enlève l'argent voulu",
      usage: "removemoney <money>",
      category: "Economie",
      permLevel: "Modérateur"
    });
  }

  async run(message, args, client) {
    try {
      let user = message.mentions.members.first() || message.author

      if (isNaN(args[0])) return message.channel.send(`${message.author}, vous devez entré un nombre !`).then(msg => {
          setTimeout(() => {
             msg.delete() 
          }, 5000);
      })

      db.subtract(`money_${user.id}`, args[0])
      let bal = await db.fetch(`money_${user.id}`)
      message.channel.send(`Vous avez enlevé ${args[0]}$ ! Le solde du compte est maintenant de **${bal}$** !`)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = removemoney;