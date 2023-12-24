const axios = require("axios");

module.exports = (bot) => {
    bot.command(["APEPUNK", "Apepunk", "apepunk"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
        let message = "";

        if (inputArray.length == 1) {
            message = "pls put a number after the apepunk to get your desired information";
            ctx.reply(message);
        }
        else {
            inputArray.shift();
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '');

            if (message >= 1 && message <= 10000) {
                let linkJson = `https://nftrarity.dog/nft/apepunks/punk/${message}/json`;
                let link = `https://nftrarity.dog/nft/apepunks/punk/${message}`;
                // let linkImg = `https://ipfs.io/ipfs/QmauVScsMHYDzKqYarWByxfbwh8Kk8eTfQQr2ATYj5LEt2/${message}.png`;
                let linkOasis = `https://oasis-nft.dog/token/0x5fEf6BAEa34eA78B07Da6E1c36909897b96f1772/${message}`;
                let linkWebsite = `https://apepunks.dog/`;
                let linkTelegram = `https://t.me/ApePunksNFT`;
                let linkTwitter = `https://twitter.com/ApePunksDC`;

                let answer1 = `<a href="${link}">APEPUNKS #${message}</a>`;
                let oasis = `<a href="${linkOasis}">Oasis</a>`;
                let website = `<a href="${linkWebsite}">Website</a>`;
                let telegram = `<a href="${linkTelegram}">Telegram</a>`;
                let twitter = `<a href="${linkTwitter}">Twitter</a>`;

                getData();
                async function getData() {
                    try {
                        let result = await axios.get(linkJson);
                        let rank = result.data.punk.rarity_rank;
                        let score = result.data.punk.rarity_score;
                        let linkImg = result.data.punk.image;
                        let scored = score.toFixed(2);

                        let attr = result.data.punk.attributes;
                        let sortedAttr = new Array();

                        for (i = 0; i < attr.length; i++) {
                            sortedAttr[i] = attr[i].value;
                        }

                        let sortedPercent = new Array();

                        for (i = 0; i < attr.length; i++) {
                            sortedPercent[i] = attr[i].percentile;
                        }

                        let percent00 = (sortedPercent[0] * 100).toFixed(2);
                        let percent01 = (sortedPercent[1] * 100).toFixed(2);
                        let percent02 = (sortedPercent[2] * 100).toFixed(2);
                        let percent03 = (sortedPercent[3] * 100).toFixed(2);
                        let percent04 = (sortedPercent[4] * 100).toFixed(2);
                        let percent05 = (sortedPercent[5] * 100).toFixed(2);
                        let percent06 = (sortedPercent[6] * 100).toFixed(2);
                        let percent07 = (sortedPercent[7] * 100).toFixed(2);

                        let sortedAttr1 =
                            `
\<b\>Traits:\<\/b\>
\<code\>- Background: ${sortedAttr[0]} (${percent00}%)\<\/code\>
\<code\>- Skin: ${sortedAttr[1]} (${percent01}%)\<\/code\>
\<code\>- Tail: ${sortedAttr[2]} (${percent02}%)\<\/code\>
\<code\>- CLothing: ${sortedAttr[3]} (${percent03}%)\<\/code\>
\<code\>- Head: ${sortedAttr[4]} (${percent04}%)\<\/code\>
\<code\>- Ears: ${sortedAttr[5]} (${percent05}%)\<\/code\>
\<code\>- Eyes: ${sortedAttr[6]} (${percent06}%)\<\/code\>
\<code\>- Mouth: ${sortedAttr[7]} (${percent07}%)\<\/code\>

${oasis} | ${twitter} | ${telegram} | ${website}
`;
                        let answer3 = sortedAttr1.trim();

                        let answer2 =
                            `
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>
`;

                        bot.telegram.sendPhoto(ctx.chat.id,
                            { url: linkImg },
                            {
                                caption:
                                    `
${answer1}${answer2}${answer3}
`,
                                parse_mode: "html"
                            });
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                message = "pls put a number between 1 to 10000 after the apepunk";
                ctx.reply(message);
            }
        }
    });
};