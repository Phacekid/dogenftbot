require('dotenv').config();
const axios = require('axios');

module.exports = (bot) => {
    bot.command(["dogebear", "DOGEBEAR", "DogeBear"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after DogeBear";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '')
            
            if (message >= 1 && message <= 10000) {
            let linkJson = `https://ipfs.io/ipfs/QmPZSMNuNk2dg4UcvvZNZJQp8YqicCn7z9nr2YkzCmYshL/${message}.json`;
            
            let linkImg = `https://ipfs.io/ipfs/QmNa9JHi2t7F4Hazm4NAiRCkG7WuACf1SJL5awBwX24kN9/${message}.png`
            let linkOasis = `https://oasis-nft.dog/token/0xB6E6b0167CE72057f6AC28Cb5FD836896b4D084E/${message}`;
            let linkWebsite = `https://www.dogebears.com/`;
            let linkTelegram = `https://t.me/dogebears`;
            let linkTwitter = `https://twitter.com/DogeBears`;
            
            let oasis = `<a href="${linkOasis}">Oasis</a>`;
            let website = `<a href="${linkWebsite}">Website</a>`;
            let telegram = `<a href="${linkTelegram}">Telegram</a>`;
            let twitter = `<a href="${linkTwitter}">Twitter</a>`;
            
        getData();
        async function getData(){
        try{
            let result = await axios.get(linkJson);
           
            let attrs = result.data.attributes;
            let out = new Array;
            let sorted = {}
              
            for (i = 0; i < attrs.length; i++) {
                
                let traitType = attrs[i]['trait_type']
                let traitValue = attrs[i]['value']
                
                out[i] = (`- ${traitType}: ${traitValue}`);
                    
                if (traitValue == "Blank") {
                    delete out[i]
                }
                if (out.length == attrs.length) {
                    let outSorted = out.join('\n')
                    sorted = `\<code\>${outSorted}\<\/code\>`
                    }
            }
            let nlString = String(sorted).replace(/[\r\n]\s*[\r\n]/g, '\n')
            console.log(String(nlString))
            let answer2 = 
`
\<a href="${linkOasis}">DogeBears #${message}\<\/a\>
\<code\>Traits:\<\/code\>
${nlString}
${oasis} | ${twitter} | ${telegram} | ${website}
`;   
       
                bot.telegram.sendPhoto(ctx.chat.id, 
                { url: linkImg },
                
                {
                caption: 
`
${answer2}
`,
                     parse_mode: "html"
                   })
                } catch(err){
                console.log(err.message)
                }
            } 
          
            } else {
                message = "pls put a number between 1 to 10000 after the DogeBear";
        ctx.reply(message);
            }
    }
    });
}