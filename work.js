const Command = require("../../modules/Command.js");
const db = require('quick.db');

class work extends Command {
  constructor(client) {
    super(client, {
      name: "work",
      description: "Vous gagné de l'argent en travailllant",
      usage: "work <work>",
      category: "Economie"
    });
  }

  async run(message, args) {
    try {
      let user = message.author;
      let work = ["développeur", "barman", "boucher", "pilote", "graphiste", "mineur", "policier", "pompier", "abatteur", "vigneron"];
      switch (args[0]) {
        case work[1] || work[2] || work[5] || work[8] || work[9]:
          let salaire = Math.floor(Math.random() * 100) + 1;
          message.channel.send(`Votre travaille vous à raporté **${salaire}**$`);
          db.add(`money_${user.id}`, salaire);
          break;
        case work[0] || work[4]:
          salaire2 = Math.floor(Math.random() * 100) + 100;
          message.channel.send(`Votre travaille vous à raporté **${salaire2}**$`);
          db.add(`money_${user.id}`, salaire2);
          break;
        case work[3] || work[6] || work[7]:
            let salaire3 = Math.floor(Math.random() * 200) + 100;
            message.channel.send(`Votre travaille vous à raporté **${salaire3}**$`);
            db.add(`money_${user.id}`, salaire3);
            break;
        case "prostitué":
            let salaire4 = Math.floor(Math.random() * 100) + 1;
            message.channel.send(`Vous faite le tapin et cela vous rapporte **${salaire4}**$`);
            db.add(`money_${user.id}`, salaire4);
            break;
        default: message.channel.send("Vous devez entré un métier valide, pour savoir nos métiers efféctué la commande test.workliste.")
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = work;