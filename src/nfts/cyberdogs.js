const axios = require("axios");

module.exports = (bot) => {
    bot.command(["cyberdog", "Cyberdog", "CYBERDOG", "CyberDog"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the cyberdog to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
        
            let link = `https://nftrarity.dog/nft/cyberdogs/punk/${message}`;
            
            let answer1 = 
`<a href="${link}">CyberDogs #${message}</a>`;
       
                bot.telegram.sendMessage(ctx.chat.id, answer1,
                
                {
                    parse_mode: "html"
                })
    }
    });
}