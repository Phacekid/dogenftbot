const axios = require("axios");

module.exports = (bot) => {
    bot.command(["BDKC", "Bdkc", "bdkc"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
        let message = "";

        if (inputArray.length == 1) {
            message = "pls put a number after the BDKC to get your desired information";
            ctx.reply(message);
        }
        else {
            inputArray.shift();
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '');

            let link = `https://nftrarity.dog/nft/boreddogekennelclub/punk/${message}/json`;
            let linke = `https://nftrarity.dog/nft/boreddogekennelclub/punk/${message}`;
            // let linked = `https://oasisnft.cash/output/bdkc/optimized/${message}.png`; 
            let linkOasis = `https://app.withmantra.com/auctions/collection/0x870fb39328958d9d363ddb88c2e6a4a32a5bef11?chain_id=2000`;
            let linkWebsite = `https://dayc.netlify.app/`;
            let linkTelegram = `https://t.me/DAYCReborn`;
            let linkTwitter = `https://twitter.com/DAYC_Reborn`;
            let answer1 = `<a href="${linke}">Bored Doge Kennel Club #${message}</a>`;
            let oasis = `<a href="${linkOasis}">Mantra</a>`;
            let website = `<a href="${linkWebsite}">Website</a>`;
            let telegram = `<a href="${linkTelegram}">Telegram</a>`;
            let twitter = `<a href="${linkTwitter}">Twitter</a>`;

            if (message >= 1 && message <= 5000) {
                // SPECIALS CODE
                if (message == 69 || message == 420 || message == 888 || message == 3666 || message == 3969 || message == 4269 || message == 4444 || message == 4969) {
                    getSpecial();
                    async function getSpecial() {
                        try {
                            let spResult = await axios.get(link);
                            let spRank = spResult.data.punk.rarity_rank;
                            let spScore = spResult.data.punk.rarity_score;
                            let spScored = spScore.toFixed(2);
                            let linkImg = spResult.data.punk.image;

                            let spAttr = spResult.data.punk.attributes;
                            let spSortedAttr = new Array();

                            for (i = 0; i < spAttr.length; i++) {
                                spSortedAttr[i] = spAttr[i].value;

                                let spAttr0 = spSortedAttr[0];
                                let spSortedAttr1 =
                                    `
\<b\>Trait:\<\/b\>
\<code\>- Special: ${spAttr0}\<\/code\>

${oasis} | ${twitter} | ${telegram} | ${website}
`;
                                let spAnswer3 = spSortedAttr1.trim();

                                let spAnswer2 =
                                    `
\<b\>Rarity Rank\<\/b\>  - \<b\>${spRank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${spScored}\<\/b\>

`;

                                bot.telegram.sendPhoto(ctx.chat.id,
                                    { url: linkImg },

                                    {
                                        caption:
                                            `
${answer1}${spAnswer2}${spAnswer3}
`,
                                        parse_mode: "html"
                                    });
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    }

                } else {

                    getData();
                    async function getData() {
                        try {
                            let result = await axios.get(link);
                            let rank = result.data.punk.rarity_rank;
                            let score = result.data.punk.rarity_score;
                            let scored = score.toFixed(2);
                            let linkImg = result.data.punk.image;

                            let attr = result.data.punk.attributes;
                            let sortedAttr = new Array();

                            for (i = 0; i < attr.length; i++) {
                                sortedAttr[i] = attr[i].value;
                            }

                            let attr0 = sortedAttr[0];
                            let attr1 = sortedAttr[1];
                            let attr2 = sortedAttr[2];
                            let attr3 = sortedAttr[3];
                            let attr4 = sortedAttr[4];
                            let attr5 = sortedAttr[5];
                            let attr6 = sortedAttr[6];

                            let typeAttr = new Array();

                            for (i = 0; i < attr.length; i++) {
                                typeAttr[i] = attr[i].trait_type;
                            }

                            let type0 = typeAttr[0];
                            let type1 = typeAttr[1];
                            let type2 = typeAttr[2];
                            let type3 = typeAttr[3];
                            let type4 = typeAttr[4];
                            let type5 = typeAttr[5];
                            let type6 = typeAttr[6];

                            let sortedPercent = new Array();

                            for (i = 0; i < attr.length; i++) {
                                sortedPercent[i] = attr[i].percentile;
                            }

                            let percent0 = sortedPercent[0];
                            let percent1 = sortedPercent[1];
                            let percent2 = sortedPercent[2];
                            let percent3 = sortedPercent[3];
                            let percent4 = sortedPercent[4];
                            let percent5 = sortedPercent[5];
                            let percent6 = sortedPercent[6];

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
\<code\>- ${type0}: ${attr0}(${percent00}%)\<\/code\>
\<code\>- ${type1}: ${attr1}(${percent01}%)\<\/code\>
\<code\>- ${type2}: ${attr2}(${percent02}%)\<\/code\>
\<code\>- ${type3}: ${attr3}(${percent03}%)\<\/code\>
\<code\>- ${type4}: ${attr4}(${percent04}%)\<\/code\>
\<code\>- ${type5}: ${attr5}(${percent05}%)\<\/code\>
\<code\>- ${type6}: ${attr6}(${percent06}%)\<\/code\>

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

                }
            } else {
                message = "pls put a number between 1 to 5000 after the BDKC";
                ctx.reply(message);
            }
        }
    });

};