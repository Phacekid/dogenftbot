const axios = require('axios');
const apikey = (process.env.APIKEY);
const symbol = 'DOGE';
module.exports = (bot) => {
    bot.command(["price", "PRICE", "Price"], (ctx) => {
        
        async function getPrice(){
            let input = ctx.message.text;
            let inputArray = input.split(" "); 
            let message = "";

            if (inputArray.length == 2) {

                inputArray.shift()
                message = inputArray.join(" ");
                message = message.trim();
                message = message.toLowerCase();
                try{
                    let tdhRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/dogechain/0x553aacf6ef76abdcfcb353ad8987b80a52bf9739');
                    let dogeRes = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${apikey}`);
                    
                    let dogeUsd = dogeRes.data.USD;
                    
                    let tdhUsd = tdhRes.data.pairs[0].priceUsd
                    let tdhDoge = tdhRes.data.pairs[0].priceNative
                    
let dogeOut = 
`
*DOGE*
*USD*: *$*${dogeUsd}
`;

let tdhOut = 
`
*TDH*
*USD*: *$*${tdhUsd}
1 *TDH* = ${tdhDoge} *DOGE*
`;
                    if(message == "doge"){
                        bot.telegram.sendMessage(ctx.chat.id, dogeOut, {
                            parse_mode: "markdown"
                        })} 
                    else if(message == "tdh"){
                        bot.telegram.sendMessage(ctx.chat.id, tdhOut, {
                            parse_mode: "markdown"
                        })}     
                    }catch(err){
                    console.log(err)
                    }
                }   
        }
        getPrice() 
    })
}