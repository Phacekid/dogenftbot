// const axios = require("axios");
// module.exports = (bot) => {
//     bot.command(["kimon", "KIMON", "Kimon"], (ctx) => {
//         let input = ctx.message.text;
//         let inputArray = input.split(" "); 
//         let message = ""; 
            
//         if (inputArray.length == 1) { 
//         message = "pls put a number after the kimon to get your desired information";
//         ctx.reply(message);
//         } 
//         else {
//             inputArray.shift(); 
//             let inmessage0 = inputArray.join(" ");
//             let inmessage1 = inmessage0.trim();
//             message = inmessage1.replace(/^0+/, '')
            

//             if (message >= 1 && message <= 10000) {
//             let linkJson = `https://nftrarity.dog/nft/kimon/punk/${message}/json`;
//             let link = `https://nftrarity.dog/nft/kimon/punk/${message}`;
//             let linkImg = `https://raw.githubusercontent.com/NftClubCash/Kimon/main/PNG/${message}.png`
//             let linkOasis = `https://oasis-nft.dog/token/0xD7F68F4349527daE381233dAA120BB42e310C986/${message}`;
//             let linkWebsite = `https://nft-dojo.com/`;
//             let linkTelegram = `https://t.me/kimonnft`;
//             let linkTwitter = `https://twitter.com/NFTClubHQ/`;
//             let linkDiscord = `https://discord.gg/SBWFzEzF`

//             let answer1 = `<a href="${link}">Kimon NFT #${message}</a>`;
//             let oasis = `<a href="${linkOasis}">Oasis</a>`;
//             let website = `<a href="${linkWebsite}">Website</a>`;
//             let telegram = `<a href="${linkTelegram}">Telegram</a>`;
//             let twitter = `<a href="${linkTwitter}">Twitter</a>`;
//             let discord = `<a href="${linkDiscord}">Discord</a>`;

//         getData();
//         async function getData(){
//         try{
//             let result = await axios.get(linkJson);
//             let rank = result.data.punk.rarity_rank;
//             let score = result.data.punk.rarity_score;
//             let scored = score.toFixed(2);
            

//             let answer2 = 
// `
// \<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
// \<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>

// ${oasis} | ${twitter} | ${telegram} | ${website} | ${discord}
// `;   
       
//                 bot.telegram.sendPhoto(ctx.chat.id, 
//                 { url: linkImg },
                
//                 {
//                 caption: 
// `
// ${answer1}${answer2}
// `,
//                      parse_mode: "html"
//                    })
//                 } catch(err){
//                 console.log(err)
//                 }
//             }   
//             } else {
//                 message = "pls put a number between 1 to 10000 after the Kimon";
//         ctx.reply(message);
//             }
//     }
//     });
// }