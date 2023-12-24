module.exports = (bot) => {
    bot.command("contact", (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
        let contactmessage = 
`
*Contact and Enquiry*
- If you have any questions or enquiries you can drop message here: *@nft_raritybot*
- You can also request for an NFT project to be added.
- This bot uses nftrarity.cash api.
- To support BUIDL: \`0x59ce8Bd3d875c13bE0D128F5b1EcF114a90b6dA4\`
`; 
    
        if (inputArray.length == 1) { 
           message = contactmessage;
           bot.telegram.sendMessage(ctx.from.id, message, {
               parse_mode: "markdown"
           })
        } else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            ctx.reply(`pls use only the contact command`);
        }
    })
}