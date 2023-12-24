const axios = require("axios");

module.exports = (bot) => {
    bot.command(["DDB", "ddb", "Ddb"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the DDB to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '')
            
            if (message >= 1 && message <= 3333) {
            let linkJson = `https://nftrarity.dog/nft/doge-dick-butts/punk/${message}/json`;
            let link = `https://nftrarity.dog/nft/doge-dick-butts/punk/${message}`;
            let linkImg = `https://oasisnft.cash/output/dogedickbutts/images/${message}.jpeg`
            let linkOasis = `https://oasis-nft.dog/token/0xFED9E67c30C76e416371B4763FC02f8a33e52b5D/${message}`;
            let linkWebsite = `https://dogedickbutts.com/`;
            let linkTelegram = `https://t.me/DogeDickbutts`;
            let linkTwitter = `https://twitter.com/DogeDickbutts`;
         
            let answer1 = `<a href="${link}">Doge DickButts #${message}</a>`;
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
                    
                if (traitValue == 'Empty') {
                    delete out[i]
                }
                if (out.length == attrs.length) {
                    let outSorted = out.join('\n')
                    sorted = `\<code\>${outSorted}\<\/code\>`
                    }
            }
            let nlString = String(sorted).replace(/[\r\n]\s*[\r\n]/g, '\n')
          
            //console.log(nlString)
                        
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
                message = "pls put a number between 1 to 3333 after the DDB";
        ctx.reply(message);
            }
    }
    });
}