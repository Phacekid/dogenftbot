const axios = require("axios");

module.exports = (bot) => {
    bot.command(["Dogenftee", "dogenftee", "DOGENFTEE"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the dogenftee";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '')
            
            if (message >= 1 && message <= 3999) {
            let linkJson = `https://nftrarity.dog/nft/dogenftees/punk/${message}/json`;
            let link = `https://nftrarity.dog/nft/dogenftees/punk/${message}`;
            let linkImg = `https://oasisnft.cash/output/dogenftees/images/${message}.png`
            let linkOasis = `https://oasis-nft.dog/token/0x5Bf197102A6f14363E508361e2165878FF481C59/${message}`;
            let linkWebsite = `https://www.dogenftees.ga/`;
            let linkTelegram = `https://t.me/doge_nftees`;
            let linkTwitter = `https://twitter.com/DogeNFTees_`;
         
            let answer1 = `<a href="${link}">Doge NFTeeS #${message}</a>`;
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
                        
            let attrs = result.data.punk.attributes;
            let out = new Array;
            let sorted = {}

            for (i = 0; i < attrs.length; i++) {
                
                let traitType = attrs[i]['trait_type']
                let traitValue = attrs[i]['value']
                let percent0 = attrs[i]['percentile']
                let percent1 = Number(percent0) * 100;
                let percent2 = percent1.toFixed(2);
                out[i] = (`- ${traitType}: ${traitValue} ${percent2}%`);
                    
                if (out.length == attrs.length) {
                    let outSorted = out.join('\n')
                    sorted = `\<code\>${outSorted}\<\/code\>`
                }
            }
           
            let answer2 = 
`
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>
\<code\>Traits:\<\/code\>
${sorted}

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