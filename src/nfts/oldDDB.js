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
            message = inputArray.join(" ");
        
            let linkJson = `https://nftrarity.dog/nft/doge-dick-butts/punk/${message}/json`;
            let link = `https://nftrarity.dog/nft/doge-dick-butts/punk/${message}`;
          
            let answer1 = 
`<a href="${link}">Doge DickButts #${message}</a>`;
          
        getData();
        async function getData(){
        try{
            let result = await axios.get(linkJson);
            let image0 = result.data.punk.image; 
            let rank = result.data.punk.rarity_rank;
            let score = result.data.punk.rarity_score;
            let scored = score.toFixed(2);
           
            let image01 = image0.replace(/:/, '');
            let image1 =
`
https\://ipfs.io/${image01}
`
let linkImage = image1.trim();

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