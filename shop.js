const Command = require("../../modules/Command.js");


class shop extends Command {
  constructor(client) {
    super(client, {
      name: "shop",
      description: "Affiche le magasin.",
      usage: "transfert <user> <montant>",
      category: "Economie"
    });
  }

  async run(message) {
    try {
        let embed = {
            "embed": {
              "url": "https://discordapp.com",
              "color": 6329327,
              "timestamp": `${Date.now()}`,
              "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "footer text"
              },
              "author": {
                "name": "shop",
                "url": "https://discordapp.com",
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
              },
              "fields": [
                {
                  "name": "item1",
                  "value": "1000"
                },
                {
                  "name": "item2",
                  "value": "2000"
                }
              ]
            }
          }
          message.channel.send(embed)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = shop;