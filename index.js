const Discord = require("discord.js");

var bot = new Discord.Client();

const TOKEN = "Mzc3MTcwNzAwODk4Nzk1NTIx.DOJeqA.Y057-uFuv2cd_xdxczoT2FH-mzA"

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "!ip") {
        message.channel.sendMessage("Server IP: play.skybattle.net")
    }
    if (message.content == "!forum") {
        message.channel.sendMessage("Forum: https://centrixpvp.eu/")
    }
    if (message.content == "!rules") {
        message.channel.sendMessage("Rules: https://centrixpvp.eu/forums/Rules/")
    }
    if (message.content == "!sticket") {
        message.channel.sendMessage("Support Ticket: https://centrixpvp.eu/support/")
    }
    if (message.content == "!unbanappeal") {
        message.channel.sendMessage("Unban Appeal: https://centrixpvp.eu/banappeal/")
    }
    if (message.content == "!vote") {
        message.channel.sendMessage("Vote: https://centrixpvp.eu/vote/")
    }
    if (message.content == "!staffapp") {
        message.channel.sendMessage("Staff Application: https://centrixpvp.eu/apply//")
    }
    if (message.content == "!store") {
        message.channel.sendMessage("Store: https://centrix.buycraft.net/")
    }
    if (message.content == "!report") {
        message.channel.sendMessage("Report: https://centrixpvp.eu/forums/Report/")
    }
    if (message.content == "!builderapp") {
        message.channel.sendMessage("Builder Application: https://centrixpvp.eu/forums/Builder-apply/")
    }
});

bot.login(TOKEN);
