const axios = require("axios");

// i can go to the json file in ipfs to get current image url then from there i move
module.exports = (bot) => {
    bot.command(["dogedoodle", "Dogedoodle", "DOGEDOODLE", "DogeDoodle"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the dogedoodle to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
        
            let link = `https://nftrarity.dog/nft/snoppy-doodle/punk/${message}`;
            
            let answer1 = 
`<a href="${link}">DogeDoodle #${message}</a>`;
       
                bot.telegram.sendMessage(ctx.chat.id, answer1,
                
                {
                    parse_mode: "html"
                })
    }
    });
}