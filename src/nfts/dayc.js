const axios = require("axios");

module.exports = (bot) => {
    bot.command(["dayc", "Dayc", "DAYC"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the DAYC to get your desired information";
        ctx.reply(message);
        }
        else {
            inputArray.shift(); 
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '')
            
            if (message >= 1 && message <= 10000) {
            let link = `https://nftrarity.dog/nft/doge-ape-yacht-club/punk/${message}/json`;
            let linke = `https://nftrarity.dog/nft/doge-ape-yacht-club/punk/${message}`
            let linked = `https://oasisnft.cash/output/dayc/images/${message}.png`; 
            let linkOasis = `https://app.withmantra.com/auctions/collection/0x79105d9bb5850bdab32aecd0fe669dcdb33d79d6?chain_id=2000`;
            let linkWebsite = `https://dayc.netlify.app/`;
            let linkTelegram = `https://t.me/DAYCReborn`;
            let linkTwitter = `https://twitter.com/DAYC_Reborn`;
            let answer1 = `<a href="${linke}">Doge Ape Yacht Club #${message}</a>`;
            let oasis = `<a href="${linkOasis}">Mantra</a>`;
            let website = `<a href="${linkWebsite}">Website</a>`;
            let telegram = `<a href="${linkTelegram}">Telegram</a>`;
            let twitter = `<a href="${linkTwitter}">Twitter</a>`;

        getData();
        async function getData(){
        try{
            let result = await axios.get(link);
            let rank = result.data.punk.rarity_rank;
            let score = result.data.punk.rarity_score;
            let scored = score.toFixed(2);
            
            let attr = result.data.punk.attributes;
            let sortedAttr = new Array();

            for (i=0; i < attr.length; i++) {
                sortedAttr[i] = attr[i].value;
            }

            let attr0 = sortedAttr[0];
            let attr1 = sortedAttr[1];
            let attr2 = sortedAttr[2];
            let attr3 = sortedAttr[3];
            let attr4 = sortedAttr[4];
            let attr5 = sortedAttr[5];
            let attr6 = sortedAttr[6];

            let sortedPercent = new Array();

            for (i=0; i < attr.length; i++) {
                sortedPercent[i] = attr[i].percentile;
            }

            let percent0 =  sortedPercent[0]; 
            let percent1 =  sortedPercent[1];
            let percent2 =  sortedPercent[2];
            let percent3 =  sortedPercent[3];
            let percent4 =  sortedPercent[4];
            let percent5 =  sortedPercent[5];
            let percent6 =  sortedPercent[6];

            let percent00 = (percent0 * 100).toFixed(2);
            let percent01 = (percent1 * 100).toFixed(2);
            let percent02 = (percent2 * 100).toFixed(2);
            let percent03 = (percent3 * 100).toFixed(2);
            let percent04 = (percent4 * 100).toFixed(2);
            let percent05 = (percent5 * 100).toFixed(2);
            let percent06 = (percent6 * 100).toFixed(2);

            let sortedAttr1 = 
`
\<b\>Traits:\<\/b\>
\<code\>- Background: ${attr0}(${percent00}%)\<\/code\>
\<code\>- Base: ${attr1}(${percent01}%)\<\/code\>
\<code\>- Outfit: ${attr2}(${percent02}%)\<\/code\>
\<code\>- Eyes: ${attr3}(${percent03}%)\<\/code\>
\<code\>- Glasses: ${attr4}(${percent04}%)\<\/code\>
\<code\>- Headware: ${attr5}(${percent05}%)\<\/code\>
\<code\>- Mouth: ${attr6}(${percent06}%)\<\/code\>

${oasis} | ${twitter} | ${telegram} | ${website}
`
let answer3 = sortedAttr1.trim();


            let answer2 = 
`
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>
`;   
       
                bot.telegram.sendPhoto(ctx.chat.id, 
                { url: linked },
                
                {
                caption: 
    `
    ${answer1}${answer2}${answer3}
    `,
                     parse_mode: "html"
                   })
                } catch(err){
                console.log(err)
                }
            }
        } else {
            message = "pls put a number between 1 to 10000 after the DAYC";
    ctx.reply(message);
        }
    }
    });
    
}