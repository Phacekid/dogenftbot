const axios = require('axios');
const apikey = (process.env.APIKEY);
const symbol = 'DOGE';

module.exports = (bot) => {
    bot.command(["convert", "CONVERT", "Convert"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
        inputArray.shift()
        
        async function getPrice(){
            try{
                let tdhRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/dogechain/0x553aacf6ef76abdcfcb353ad8987b80a52bf9739');
                let dogeRes = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${apikey}`);                    
                let dogeUsd = dogeRes.data.USD;

                let tdhUsd = tdhRes.data.pairs[0].priceUsd
                let tdhDoge = tdhRes.data.pairs[0].priceNative    

                if (inputArray.length == 2) {
                    let pos1 = Number(inputArray[0])
                    let pos2 = String(inputArray[1]).toLowerCase()
                    
                    if (inputArray.length == 2 && typeof(pos1) == "number" && typeof(pos2) == "string") {
                        let tdhInUsd = (pos1 * tdhUsd).toFixed(4) 
                        let tdhInDoge = (pos1 * tdhDoge).toFixed(2)
                        let dogeInUsd = (pos1 * dogeUsd).toFixed(4)
let tdhOut = 
`
${pos1} *TDH* = ${tdhInUsd} *USD*
${pos1} *TDH* = ${tdhInDoge} *DOGE*
`;
let dogeOut = 
`
${pos1} *DOGE* = ${dogeInUsd} *USD*

`
                    if (pos2 == "tdh"){
                        bot.telegram.sendMessage(ctx.chat.id, tdhOut, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "doge"){
                        bot.telegram.sendMessage(ctx.chat.id, dogeOut, {
                            parse_mode: "markdown"
                        })
                    }
                        
                    }
                }

                else if (inputArray.length == 3) {
                    let pos1 = Number(inputArray[0])
                    let pos2 = String(inputArray[1]).toLowerCase()
                    let pos3 = String(inputArray[2]).toLowerCase()

                    if (inputArray.length == 3 && typeof(pos1) == "number" && typeof(pos2) == "string" && typeof(pos3) == "string") {
                        let tdhInUsd = (pos1 * tdhUsd).toFixed(4) 
                        let tdhInDoge = (pos1 * tdhDoge).toFixed(2)
                        let dogeInUsd = (pos1 * dogeUsd).toFixed(4)
                        let dogeInTdh = (pos1 * (dogeUsd/tdhUsd)).toFixed(2)
                        let usdInDoge = (pos1 / dogeUsd).toFixed(2)
                        let UsdInTdh = (pos1 / tdhUsd).toFixed(2)
                        
                        let tdhOutUsd = `${pos1} *TDH* = ${tdhInUsd} *USD*`;
                        let tdhOutDoge = `${pos1} *TDH* = ${tdhInDoge} *DOGE*`
                        let dogeOutUsd = `${pos1} *DOGE* = ${dogeInUsd} *USD*`
                        let dogeOutTdh = `${pos1} *DOGE* = ${dogeInTdh} *TDH*`
                        let usdOutTdh = `${pos1} *USD* = ${UsdInTdh} *TDH*`
                        let usdOutDoge = `${pos1} *USD* = ${usdInDoge} *DOGE*`

                    if (pos2 == "tdh" && pos3 == "usd"){
                        bot.telegram.sendMessage(ctx.chat.id, tdhOutUsd, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "tdh" && pos3 == "doge"){
                        bot.telegram.sendMessage(ctx.chat.id, tdhOutDoge, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "doge" && pos3 == "usd"){
                        bot.telegram.sendMessage(ctx.chat.id, dogeOutUsd, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "doge" && pos3 == "tdh"){
                        bot.telegram.sendMessage(ctx.chat.id, dogeOutTdh, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "usd" && pos3 == "tdh"){
                        bot.telegram.sendMessage(ctx.chat.id, usdOutTdh, {
                            parse_mode: "markdown"
                        })
                    }
                    else if (pos2 == "usd" && pos3 == "doge"){
                        bot.telegram.sendMessage(ctx.chat.id, usdOutDoge, {
                            parse_mode: "markdown"
                        })
                    }}
                }
                else{
                    console.log("nah")
                }
                }catch(err){
                console.log(err)
                }
            }
        getPrice() 
    })
}