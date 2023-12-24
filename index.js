const Telegraf = require('telegraf');

require('dotenv').config();
const bot = new Telegraf(process.env.TOKEN);

const startCommand = require('./src/commands/start');
startCommand(bot);

const realdogepunkInfo = require('./src/nfts/realdogepunk');
realdogepunkInfo(bot);
// const daycInfo = require('./src/nfts/dayc');
// daycInfo(bot);
const shibesInfo = require('./src/nfts/shibes');
shibesInfo(bot);
const punksInfo = require('./src/nfts/punks');
punksInfo(bot);
const apepunkInfo = require('./src/nfts/apepunk');
apepunkInfo(bot);
// const cyberdogsInfo = require('./src/nfts/cyberdogs');
// cyberdogsInfo(bot);
const dogenfteesInfo = require('./src/nfts/dogenftees');
dogenfteesInfo(bot);
const dogeverseInfo = require('./src/nfts/dogeverse');
dogeverseInfo(bot);
const goblinsInfo = require('./src/nfts/goblins-on-doge');
goblinsInfo(bot);
const doodleInfo = require('./src/nfts/snoopy-doodle');
doodleInfo(bot);
const dogerockInfo = require('./src/nfts/dogerock');
dogerockInfo(bot);
const dkcInfo = require('./src/nfts/doge-kennel-club');
dkcInfo(bot);
const dogedbInfo = require('./src/nfts/doge-dick-butts');
dogedbInfo(bot);
// const bdkcInfo = require('./src/nfts/bdkc');
// bdkcInfo(bot);
const dogebearInfo = require('./src/nfts/dogebear');
dogebearInfo(bot);
const mutantsInfo = require('./src/nfts/mutants');
mutantsInfo(bot);
const sovPunkInfo = require('./src/nfts/sovpunk');
sovPunkInfo(bot);
const convertInfo = require('./src/converter/convert');
convertInfo(bot);
const priceInfo = require('./src/converter/price');
priceInfo(bot);

const contactInfo = require('./src/help/contact');
contactInfo(bot);

exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body); // get data passed to us
    bot.handleUpdate(tmp); // make Telegraf process that data
    return callback(null, { //return something for webhook, so it doesn't
        statusCode: 200,
        body: '',
    });
};

bot.launch();