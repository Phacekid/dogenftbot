const axios = require("axios");

module.exports = (bot) => {
    bot.command(["sovpunk", "Sovpunk", "SovPunk", "SOVPUNK"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the sovpunk to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            message = inmessage0.trim();

            if (message == "0") {
                let linkJson = `https://nftrarity.dog/nft/dogepunks/punk/${message}/json`;
                let linkNftRar = `https://nftrarity.dog/nft/dogepunks/punk/${message}`;
                let linkImg = `https://ipfs.io/ipfs/bafybeiepvahydnyhjiq7p2iags4qi66xr5ioukaclrfybxzsjwulzmwldq/${message}.png`
                let linkOasis0 = `https://oasis-nft.dog/token/0x63309a2B8F507f667dA75c24013a2E18904Cc19D/${message}`;
                let linkWebsite0 = `https://sovpunks.com/`;
                let linkTelegram0 = `http://t.me/SovPunks`;
                let linkTwitter0 = `https://twitter.com/SovPunks`;
                let linkMantra = 'https://app.withmantra.com/auctions/collection/0x63309a2b8f507f667da75c24013a2e18904cc19d?chain_id=2000' 
    
                let answer10 = `<a href="${linkNftRar}">SOVPUNK #${message}</a>`;
                let mantra = `<a href="${linkMantra}">Mantra</a>`;
                let oasis0 = `<a href="${linkOasis0}">Oasis</a>`;
                let website0 = `<a href="${linkWebsite0}">Website</a>`;
                let telegram0 = `<a href="${linkTelegram0}">Telegram</a>`;
                let twitter0 = `<a href="${linkTwitter0}">Twitter</a>`;
                get0()
                async function get0() {
                    try {
                        let result0 = await axios.get(linkJson);
                        let rank0 = result0.data.punk.rarity_rank;
                        let score0 = result0.data.punk.rarity_score;
                        let scored0 = score0.toFixed(2);
            
                        let attr0 = result0.data.punk.attributes;
                        let attrEnd0 = (attr0.length - 1);
                       
                        let addedAttr0 = new Array();
                        for (i=0; i < attrEnd0; i++) {
                            addedAttr0[i] = attr0[i].value;
                        }
            
                        let noOfAttr0 = attrEnd0 - 1;
                        let traitType0 = addedAttr0[0];
            
                        let out0 = new Array;
                        let sorted0 = {}
            
                        for (i = 1; i < attrEnd0; i++) {
                            let value0 = attr0[i]['value']
                            let percent00 = attr0[i]['percentile']
                            let percent10 = Number(percent00) * 100;
                            let percent20 = percent10.toFixed(2);
                            out0[i] = (`- ${value0} ${percent20}%`);
                            
                            if (out0.length == attrEnd0) {
                                let outSorted0 = out0.join('\n')
                                sorted0 = `\<code\>${outSorted0}\<\/code\>`
                            }
                        }
                        let finalOut0 = sorted0.trim();
                        
                        let answer20 = 
`
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank0}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored0}\<\/b\>
\<b\>${traitType0}\<\/b\> SovPunk with \<b\>${noOfAttr0}\<\/b\> Attributes.
\<b\>Traits:\<\/b\>${finalOut0}

${mantra} | ${oasis0} | ${twitter0} | ${telegram0} | ${website0}
`;   
                            bot.telegram.sendPhoto(ctx.chat.id, 
                            { url: linkImg },
                            
                            {
                            caption: 
`
${answer10}${answer20}
`,
                                 parse_mode: "html"
                               })

                    }catch(err) {
                        console.log(err.message)
                    }
                }
            } else {
                if (message >= 1 && message <= 9999) {
                    message = message.replace(/^0+/, '')
                    let linkJson2 = `https://nftrarity.dog/nft/dogepunks/punk/${message}/json`;
                    let linkNftRar2 = `https://nftrarity.dog/nft/dogepunks/punk/${message}`;
                    let linkImg2 = `https://ipfs.io/ipfs/bafybeiepvahydnyhjiq7p2iags4qi66xr5ioukaclrfybxzsjwulzmwldq/${message}.png`
                    let linkOasis = `https://oasis-nft.dog/token/0x63309a2B8F507f667dA75c24013a2E18904Cc19D/${message}`;
                    let linkWebsite = `https://sovpunks.com/`;
                    let linkTelegram = `http://t.me/SovPunks`;
                    let linkTwitter = `https://twitter.com/SovPunks`;
                    let linkMantra = 'https://app.withmantra.com/auctions/collection/0x63309a2b8f507f667da75c24013a2e18904cc19d?chain_id=2000' 
        
                    let answer1 = `<a href="${linkNftRar2}">SOVPUNK #${message}</a>`;
                    let mantra = `<a href="${linkMantra}">Mantra</a>`;
                    let oasis = `<a href="${linkOasis}">Oasis</a>`;
                    let website = `<a href="${linkWebsite}">Website</a>`;
                    let telegram = `<a href="${linkTelegram}">Telegram</a>`;
                    let twitter = `<a href="${linkTwitter}">Twitter</a>`;
                    
        
                getData();
                async function getData(){
                try{
                    let result = await axios.get(linkJson2);
                    let rank = result.data.punk.rarity_rank;
                    let score = result.data.punk.rarity_score;
                    let scored = score.toFixed(2);
        
                    let attr = result.data.punk.attributes;
                    let attrEnd = (attr.length - 1);
                   
                    let addedAttr = new Array();
                    for (i=0; i < attrEnd; i++) {
                        addedAttr[i] = attr[i].value;
                    }
        
                    let noOfAttr = attrEnd - 1;
                    let traitType = addedAttr[0];
        
                    let out = new Array;
                    let sorted = {}
        
                    for (i = 1; i < attrEnd; i++) {
                        let value = attr[i]['value']
                        let percent0 = attr[i]['percentile']
                        let percent1 = Number(percent0) * 100;
                        let percent2 = percent1.toFixed(2);
                        out[i] = (`- ${value} ${percent2}%`);
                        
                        if (out.length == attrEnd) {
                            let outSorted = out.join('\n')
                            sorted = `\<code\>${outSorted}\<\/code\>`
                        }
                    }
                    let finalOut = sorted.trim();
                    
                    let answer2 = 
`
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>
\<b\>${traitType}\<\/b\> SovPunk with \<b\>${noOfAttr}\<\/b\> Attributes.
\<b\>Traits:\<\/b\>${finalOut}
        
${mantra} | ${oasis} | ${twitter} | ${telegram} | ${website}
`;   
               
                        bot.telegram.sendPhoto(ctx.chat.id, 
                        { url: linkImg2 },
                        
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
                        message = "pls put a number between 0 to 9999 after the sovpunk";
                ctx.reply(message);
                    }
            } 
    }
    });
}