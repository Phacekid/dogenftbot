const axios = require("axios");

module.exports = (bot) => {
    bot.command(["rdp", "RDP", "Rdp"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
        let message = "";

        if (inputArray.length == 1) {
            message = "pls put a number after the RDP to get your desired information";
            ctx.reply(message);
        }
        else {
            inputArray.shift();
            let inmessage0 = inputArray.join(" ");
            let inmessage1 = inmessage0.trim();
            message = inmessage1.replace(/^0+/, '');

            if (message >= 1 && message <= 10000) {
                let linkJson = `https://nftrarity.dog/nft/real-doge-punks/punk/${message}/json`;
                let link = `https://nftrarity.dog/nft/real-doge-punks/punk/${message}`;
                // let linkImg = `https://oasisnft.cash/output/realdogepunks/images/${message}.png`
                let linkOasis = `https://oasis-nft.dog/token/0xd38B22794B308a2e55808a13D1E6a80C4be94Fd5/${message}`;
                let linkWebsite = `https://realdogepunks.com/`;
                let linkTelegram = `https://t.me/realdogepunks`;
                let linkTwitter = `https://twitter.com/RealDogePunks`;

                let answer1 = `<a href="${link}">Realdogepunks #${message}</a>`;
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
                        let scored = score.toFixed(2);
                        let linkImg = result.data.punk.image;

                        let attrs = result.data.punk.attributes;
                        let out = new Array;
                        let sorted = {};

                        for (i = 0; i < attrs.length; i++) {

                            let traitType = attrs[i]['trait_type'];
                            let traitValue = attrs[i]['value'];
                            let percent0 = attrs[i]['percentile'];
                            let percent1 = Number(percent0) * 100;
                            let percent2 = percent1.toFixed(2);
                            out[i] = (`- ${traitType}: ${traitValue} ${percent2}%`);

                            if (traitValue == "Blank") {
                                delete out[i];
                            }
                            if (out.length == attrs.length) {
                                let outSorted = out.join('\n');
                                sorted = `\<code\>${outSorted}\<\/code\>`;
                            }
                        }
                        let nlString = String(sorted).replace(/[\r\n]\s*[\r\n]/g, '\n');

                        let answer2 =
                            `
\<b\>Rarity Rank\<\/b\>  - \<b\>${rank}\<\/b\>
\<b\>Rarity Score\<\/b\> - \<b\>${scored}\<\/b\>
\<code\>Traits:\<\/code\>
${nlString}
${oasis} | ${twitter} | ${telegram} | ${website}
`;
                        try {
                            bot.telegram.sendPhoto(ctx.chat.id,
                                { url: linkImg },
                                {
                                    caption:
                                        `
${answer1}${answer2}
`,
                                    parse_mode: "html"
                                });
                        } catch (err) {
                            console.log(err);
                        }

                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                message = "pls put a number between 1 to 10000 after the RDP";
                ctx.reply(message);
            }
        }
    });
};