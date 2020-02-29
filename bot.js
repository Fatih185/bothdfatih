const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ('./ayarlar.json');

var profix = ayarlar.profix;

client.on('ready', () => {
  console.log(`Botunuz Olan ${client.user.tag} sunucuya giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'sa') {
    msg.reply('as');
  }
  if (msg.content.toLocaleLowerCase() === 'amk') {
    msg.reply('Bu Sunucuda Küfür Etmek yasaktır Birdaha Tekrarlanırsa Sunucudan Engellenilsiniz!');
  }
  if (msg.content.toLocaleLowerCase() === 'selamünaleyküm') {
    msg.reply('aleykümselam');
  }
  if (msg.content.toLocaleLowerCase() === 'siktir git') {
    msg.reply('Bu Sunucuda Küfür Etmek yasaktır Birdaha Tekrarlanırsa Sunucudan Engellenilsiniz!');
  }
  if (msg.content.toLocaleLowerCase() === 'oç') {
    msg.reply('Bu Sunucuda Küfür Etmek yasaktır Birdaha Tekrarlanırsa Sunucudan Engellenilsiniz!');
  }
  if (msg.content.toLocaleLowerCase() === 'merhaba') {
    msg.reply('Sanada merhaba!');
  }
  if (msg.content.toLocaleLowerCase() === profix + 'adam') {
    msg.reply('fatih');
  }
  if (msg.content.toLocaleLowerCase() === profix + 'kedi') {
    msg.reply('https://tenor.com/view/cat-driving-serious-cat-driving-focus-driving-gif-15519638');
  }
  if (msg.content.toLocaleLowerCase() === profix + 'sitemiz') {
    msg.reply('hd-fatih.com');
  }
  if (msg.content.toLocaleLowerCase() === profix + 'yt') {
    msg.reply('youtube.com/c/hdfatih');
  }


});

client.login('NjgzMDg2MzAzNDk5MTI0ODUw.XlmcEw.ZTIEQs9mgRc34G3aUvDc9PODaag');