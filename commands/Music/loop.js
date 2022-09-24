const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "loop",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (player.loop === 0) {
        const embed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(`<@${message.author.id}> has looped the current track`)
      player.TrackRepeat();
      message.channel.send({embeds: [embed]})
    } else if (player.loop === 1) {
        const thing = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(`<@${message.author.id}> has looped the whole track`)
        player.QueueRepeat();
      message.channel.send({embeds: [thing]})
    } else if (player.loop === 2) {
       const sht = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(`<@${message.author.id}> has disabled the loop`)
        player.DisableRepeat();
      message.channel.send({embeds: [sht]})
    }
  }
}