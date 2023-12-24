const axios = require("axios");

module.exports = (bot) => {
    bot.command(["Dogenftee", "dogenftee", "DOGENFTEE"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the dogenftee to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '')
            
            if (message >= 1 && message <= 3999) {
            let linkJson = ``;
            let link = ``;
            let linkImg = ``
            let linkOasis = ``;
            let linkWebsite = ``;
            let linkTelegram = ``;
            let linkTwitter = ``;
         
            let answer1 = `<a href="${link}">>Doge NFTeeS #${message}</a>`;
            let oasis = `<a href="${linkOasis}">Oasis</a>`;
            let website = `<a href="${linkWebsite}">Website</a>`;
            let telegram = `<a href="${linkTelegram}">Telegram</a>`;
            let twitter = `<a href="${linkTwitter}">Twitter</a>`;

        getData();
        async function getData(){
        try{
            let result = await axios.get(linkJson);
            let rank = result.data.punk.rarity_rank;
            let score = result.data.punk.rarity_score;
            let scored = score.toFixed(2);
                        
            let answer2 = 
`
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>

${oasis} | ${twitter} | ${telegram} | ${website}
`;   
       
                bot.telegram.sendPhoto(ctx.chat.id, 
                { url: linkImg },   
                {
                caption: 
`
${answer1}${answer2}
`,
                     parse_mode: "html"
                   })
                } catch(err){
                console.log(err)
                }
            }   
            } else {
                message = "pls put a number between 1 to 3999 after the dogenftee";
        ctx.reply(message);
            }
    }
    });
}