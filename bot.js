const TelegramBot = require('node-telegram-bot-api');

const token = '5988039733:AAF8c1FxKpfnrIIQEf-Q9cZnAwetlk00YGo';


const bot = new TelegramBot(token,{polling:true});
async function ducky(reg,name){


    let d=await fetch('https://resultchecker.onrender.com/ducky', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({reg:reg, name:undefined})
    })
    
    let data=await d.json();
   let s= await bot.sendMessage(name,data[0].Name)
    s=await bot.sendMessage(name,data[0]["Registration No"])
for(let i=0;i<data.length-1;i++){
    
s=await bot.sendMessage(name,`${data[i]["Subject Name"]}---->${data[i]["Grade"]}`)}
bot.sendMessage(name,data[data.length-1].resul)
}



bot.onText(/\/start/,(msg,match)=>{



    bot.sendMessage(msg.chat.id,"Enter your Registration Number if want to know your result")
})



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
console.log(msg.text)

ducky(msg.text,chatId)


});