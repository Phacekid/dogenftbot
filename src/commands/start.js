const config = require('../../config');

module.exports = (bot) => {
    bot.start((ctx) => {
        let message = config.helpMessage
        bot.telegram.sendMessage(ctx.from.id, "Hi, I am NFT Info Bot")
        bot.telegram.sendMessage(ctx.from.id, message, {
            parse_mode: "markdown"
        })
    })
    
    bot.help((ctx) => {
        let message = config.helpMessage
        bot.telegram.sendMessage(ctx.from.id, message, {
            parse_mode: "markdown"
        })
    
    })
}

