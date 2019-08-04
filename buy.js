const Command = require("../../modules/Command.js");
const db = require('quick.db');

class buy extends Command {
  constructor(client) {
    super(client, {
      name: "buy",
      description: "Permet d'acheté des produit dans la boutique",
      usage: "buy <produit>",
      category: "Economie"
    });
  }

  async run(message, args) {
    try {
      let bal = await db.fetch(`money_${message.author.id}`);
      switch (args[0]) {
          case 'item1':
              if (bal < 700) return message.channel.send(`Vous n'avez pas assez d'argent. Il vous manquent **${700-bal}$** !`)
              db.subtract(`money_${message.author.id}`, 700)
              message.channel.send("Bravo ! Vous avez acheté l'item1")
              break;
      
          default: message.channel.send("Vous devez mettre un produit valide.")
              break;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = buy;