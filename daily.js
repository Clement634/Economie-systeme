const Command = require("../../modules/Command.js");
const db = require("quick.db");
const ms = require("ms")

class daily extends Command {
  constructor(client) {
    super(client, {
      name: "daily",
      description: "Vous donne tout les jours une récompense",
      usage: "daily",
      category: "Economie"
    });
  }

  async run(message) {
    try {
      let timeout = 86400000 //24h
      let amount = Math.floor(Math.random() * 999) + 1;
      let daily = await db.fetch(`daily_${message.author.id}`);

      if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms(timeout - (Date.now() - daily));
          message.channel.send(`Vous avez déjà récupéré votre récompense du jour.Revenez dans **${time.hours}h ${time.minutes}m ${time.seconds}** !`)
      } else {
          message.channel.send(`Vous avez gagné une récompense de **${amount}$** !`)
          db.add(`money_${message.author.id}`, amount)
          db.set(`daily_${message.author.id}`, Date.now())
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = daily;
