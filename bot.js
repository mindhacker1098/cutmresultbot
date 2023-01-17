const TelegramBot = require('node-telegram-bot-api');

const token = '5988039733:AAF8c1FxKpfnrIIQEf-Q9cZnAwetlk00YGo';


const bot = new TelegramBot(token,{polling:true});



bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
console.log(msg.text)



// let s="";


// fetch('https://resultchecker.onrender.com/ducky', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({reg:msg.text, name:undefined})
//     }).then(res=>res.json()).then(data=>{


// for(let i=0;i<data.length-1;i++){

// if(i==0){s+=`${data[0]["Name"]}

// `
// s+=`${data[0]["Registration No"]}


// `

// }


//   s+=`${data[i]["Subject Name"]}---->${data[i]["Grade"]}
  
  
// `
// }
// s+=`${data[data.length-1].resul}`
// console.log(s)
bot.sendMessage(chatId,msg.text)

    //})
















});