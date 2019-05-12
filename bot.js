const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "￥";

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '576950810353729557').setName("ك");
client.channels.find('id', '576950810353729557').setName("كل");
client.channels.find('id', '576950810353729557').setName("كل ع");
client.channels.find('id', '576950810353729557').setName("كل عا");
client.channels.find('id', '576950810353729557').setName("كل عام");
client.channels.find('id', '576950810353729557').setName("كل عام وا");
client.channels.find('id', '576950810353729557').setName("كل عام وان");
client.channels.find('id', '576950810353729557').setName("كل عام وانت");
client.channels.find('id', '576950810353729557').setName("كل عام وانتم");
client.channels.find('id', '576950810353729557').setName("كل عام وانتم ب");
client.channels.find('id', '576950810353729557').setName("كل عام وانتم بخ");
client.channels.find('id', '576950810353729557').setName("كل عام وانتم بخي");
client.channels.find('id', '576950810353729557').setName("كل عام وانتم بخير");
client.channels.find('id', '576950810353729557').setName("• Va » Victoria");
  }, 5000);
});

client.on('message',async message => {
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Va')) {
   let role = message.guild.roles.find('name', '• Va » Me')
   if(role) return message.channel.send(`هاي الرتبة موجودة !`)

 if(!role){
   rainbow =  message.guild.createRole({
  name: "• Va » Me",
  color: "#000000",
  permissions:[]

})

}
message.channel.send('تم')
}})

client.on('ready', () => {
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', '• Va » Me');
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 2500);
})

const adminprefix = "￥";
const devs = ['564414567946387487','517956585839132682']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
}
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "Ex")) {
        let Ex = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__اوامـــر تــغـيـر احـلات بـوت + صـور + اسـم__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			***
			1-${prefix}setgame = الى تـغـيـر حـالـه الـى بـلانـيـق [ :large_blue_circle: ]
			
			2-${prefix}setT = الـى تـغـيـر حـالـه الــى تـويـتـش [ :red_circle: ]
			
			3-${prefix}setavatar = الـى تـغـيـر صـور [ :camera_with_flash: ]
			
			4-${prefix}setname = الـى تـغـيـر اسـم [ :pencil: ]
			***
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			**__مـسـوالـيـن تـغـيـر__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			1-! ➹⎛ トゥルキパシャ ⎞♔ ❥ 
			2-.7md`);
            message.channel.sendEmbed(Ex);
    }
});

client.login(process.env.BOT_TOKEN);
