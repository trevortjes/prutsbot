var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var num = 0;
var reactions = ["prutsbad", "ghghgh", "klopklop", "ohhhh", "toch", "we vliegen erin"];
var responses = ["Jij moet niet zeuren!", "STOOOOOOP!", "Ik moest kloppen want de bel doet het niet!", "Dat is lelijk! <:OHHH:455618645649915904>", "Niewaarrr", "PATAT!"];
var doves = 
[
"",
"https://heightline.com/wp-content/uploads/Dove-Cameron-Boyfriend-Age-Dating-Relationship-With-Ryan-Mccartan-640x480.jpg",
"https://i.pinimg.com/originals/74/a8/43/74a843310a45e3dc28c50ed2dd148d46.jpg",
"https://s3.r29static.com//bin/entry/e41/720x864,80/1908965/image.jpg",
"https://pmcvariety.files.wordpress.com/2013/12/132023_2202_cr-2.jpg",
"https://static.tvtropes.org/pmwiki/pub/images/ee792f3b160147f880bac66f53c3aec9.jpg",
"http://los40es00.epimg.net/los40/imagenes/2017/11/29/cinetv/1511942654_651502_1511943017_rrss_normal.jpg",
"http://br.web.img3.acsta.net/c_300_300/pictures/18/09/28/21/11/0845267.jpg",
"https://shawetcanada.files.wordpress.com/2018/07/gettyimages-952291464.jpg?quality=80&strip=all&w=720&h=480&crop=1",
"https://cdn.discordapp.com/attachments/471806085666308100/504329523362398219/Dove-Cameron---TigerBeat-Magazine-2016--04.jpg",
"https://cdn.discordapp.com/attachments/471806085666308100/502216479345737728/007_63.jpg"

]
var dovelen = doves.length;
var rall = reactions[0] + ": " + responses[0] + "\n";
var fLen = responses.length;


for(i=1; i < fLen; i++)
{
rall +=  reactions[i] + ": " + responses[i] + "\n"
};
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});



bot.on('message', function (user, userID, channelID, message, evt) {
  
        var cmd = message.toLowerCase();
       
  
        switch(cmd) {
            case 'prutsbad':
                bot.sendMessage({
                    to: channelID,
                    message: responses[0]
                });
				break;
			case 'ghghgh':
                bot.sendMessage({
                    to: channelID,
                    message: responses[1]
                });
				break;
			case 'klopklop':
                bot.sendMessage({
                    to: channelID,
                    message: responses[2]
                });
            break;      
			case 'ohhhh':
                bot.sendMessage({
                    to: channelID,
                    message: responses[3]
                });
            break;     
			case 'nummer':
                bot.sendMessage({
                    to: channelID,
                    message: 'Huidig nummer = ' + num.toString()
                })
				num++;
            break;
		case 'roll':
                bot.sendMessage({
                    to: channelID,
                    message: 'Je rolde ' + Math.floor((Math.random() * 3) + 1)
                })
				num++;
            break;      		
		case 'toch':
                bot.sendMessage({
                    to: channelID,
                    message: responses[4]
                })
            break;  	
		case 'we vliegen erin':
                bot.sendMessage({
                    to: channelID,
                    message: responses[5]
                })
            break;  
		case 'responses':
				bot.sendMessage({
                    to: channelID,
                    message: "```" + rall + "```"
				})
            break;  
		case 'owo kutzooi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ik ben prrrrrutsbot! <:OHHH:455618645649915904>'
                });
            break; 		
			case 'dove':
                bot.sendMessage({
                    to: channelID,
                    message: doves[Math.floor((Math.random() * dovelen) + 1)]
                });
            break; 	
         }
});
