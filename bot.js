const Discord = require('discord.js');
const client = new Discord.Client();
const urban = require('urban.js');

client.on('ready', () => {
    console.log('Google Home!');
    //bot.user.setGame('Google Home is here!');
});


function coinflip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function ball() {
    choices = ["penis","please try again","nah man I will not answer you","get out of my face","you are beautiful just the way you are","you are loved by OOOPS","you will be banned from this server one day","you are gay"];
    return choices[Math.floor(Math.random() * 8)];
}
function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}





bot.on('message', message => {
client.on('message', message => {
    if (tL(message.content) === 'ok google?') {
        message.reply('https://www.accuweather.com/');
    }
});

client.on('message', message => {
    if (tL(message.content) === 'ok google when does OOOPS have a birthday?') {
        message.reply('OOOPS has a birthday on November 3rd every year... like your birthday should be...');
    }
});
    
client.on('message', message => {
    if (tL(message.content) === 'ok google flip a coin') {
        message.reply(coinflip());
    }
});
    
client.on('message', message => {
    if (tL(message.content) === 'ok google ball') {
        message.reply(ball());
    }
});
    
client.on('message', message => {
    if (tL(message.content) === 'ok google gay?') {
        message.reply('Brandor is the gayest person in the world');
    }
});
 
    client.on('message', message => {
    if (tL(message.content) === 'ok google twitter?') {
        message.reply('https://twitter.com/OOnderstandable');
    }
});
    
client.on('message', message => {
    if (tL(message.content) === 'ok google why is OOOPS so bad a krunker?') {
        message.reply('Maybe he is bad but he is far better than you so if he is bad what does that make you... (hint FUCKING GARBAGE)');
    }
});
    
client.on('message', message => {
    if (tL(message.content) === 'ok google') {
        message.channel.send('Hello, Google Home is at your service.');
    }
}); 
    
client.on('message', message => {
    if (tL(message.content.slice(0,15)) === 'ok google urban') {
        urban(tL(message.content).slice(15)).then(function(value) {
        wordArray = JSON.parse(JSON.stringify(value));
        message.channel.send({"embed":{"color":15229474,"fields":[{"name":"Word:","value":cL(wordArray['word'])},{"name":"Definition:","value":cL(wordArray['definition'])},{"name":"Example:","value":cL(wordArray['example'])}]}});
        });
    }
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'ok google join vc') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.on('message', message => {
    if (tL(message.content) === 'ok google help') {
        message.author.send("```CSS\n" 
        + "ok google\n"
        + "ok google weather?\n"
        + "ok google what is 4 + 8\n"
        + "ok google help\n"
        + "ok google when does OOOPS have a birthday?\n"
        + "ok google set a reminder?\n"
        + "ok google what is 1 + 1?\n"
        + "ok google flip a coin\n"
        + "ok google ball\n"
        + "ok google why is OOOPS so bad a krunker?\n"
        + "ok google gay?\n"
        + "ok google twitter?```");
    }
});

client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"ok google what is"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});

})








// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
