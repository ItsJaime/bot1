const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 });
const fs = require('fs')

client.on('ready',() =>{
  console.log('Estoy listo!')
  client.application.commands.set([
  {
    name: 'ip',
    description: 'Ip del servidor',
    options: [],
  }
])
});

client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ip') {
    int.reply('La ip es mc.yoloretro.ml (𝙀𝙡 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧 𝙚𝙨𝙩𝙖 𝙚𝙣 𝙛𝙖𝙨𝙚 𝙗𝙚𝙩𝙖)')
  }
})

client.login(OTcyODI3MzY0NDI3OTY4NTg0.GMjIEd.Tzz23x87Tybpl31gVhFemHlrVKUkSdqPmY9f20);
