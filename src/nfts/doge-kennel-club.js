const axios = require("axios");

module.exports = (bot) => {
    bot.command(["DKC", "dkc", "Dkc"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
            
        if (inputArray.length == 1) { 
        message = "pls put a number after the DKC to get your desired information";
        ctx.reply(message);
        } 
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
        
            let linkJson = `https://nftrarity.dog/nft/doge-kennel-club/punk/${message}/json`;
            let link = `https://nftrarity.dog/nft/doge-kennel-club/punk/${message}`;
          
            let answer1 = 
`<a href="${link}">Doge Kennel Club #${message}</a>`;
          
        getData();
        async function getData(){
        try{
            let result = await axios.get(linkJson);
            let image0 = result.data.punk.image; 
            let rank = result.data.punk.rarity_rank;
            let score = result.data.punk.rarity_score;
            let scored = score.toFixed(2);
            //console.log(image0);
let linkImage = image0.trim();
//console.log(image2);
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