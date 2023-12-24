const axios = require("axios");

module.exports = (bot) => {
    bot.command(["goblin", "Goblin", "GOBLIN"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the goblin to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
        
            let linkJson = `https://nftrarity.dog/nft/goblins-on-doge/punk/${message}/json`;
            let link = `https://nftrarity.dog/nft/goblins-on-doge/punk/${message}`;
            let linkImage = `https://ipfs.io/ipfs/QmSifFzarzzen5Vv4TWWhpN56VksqZrF3Bmuuc4gdGTEv1/${message}.png`
            let answer1 = 
`<a href="${link}">Goblins on Doge #${message}</a>`;

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
`;   
       
                bot.telegram.sendPhoto(ctx.chat.id, 
                { url: linkImage },
                
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
    }
    });
}