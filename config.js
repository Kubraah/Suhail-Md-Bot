const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165446079";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_35_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTdVT0FRcnBxakRTekJ3ZDdaTDBMb3BJT0hrV1ZRbEY0WDFXK1FFbm9jcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGF5T3Z6a3BSTzJsNkpIei0xSlNzQVwiLFxuICBcInBob25lSWRcIjogXCI3YTlmZTQ5My1iMWIzLTQyOTEtYjY5ZC0xM2MzYjkxMzRhZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDIwMixcbiAgICAgIDE0NCxcbiAgICAgIDIyNixcbiAgICAgIDUsXG4gICAgICAyMDYsXG4gICAgICAyNTUsXG4gICAgICA5MSxcbiAgICAgIDExOCxcbiAgICAgIDE2NixcbiAgICAgIDE2OSxcbiAgICAgIDE5MixcbiAgICAgIDE1NyxcbiAgICAgIDk3LFxuICAgICAgMTY0LFxuICAgICAgMjAxLFxuICAgICAgMjAyLFxuICAgICAgMTcxLFxuICAgICAgMjYsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjAxLFxuICAgICAgNDMsXG4gICAgICAyNDAsXG4gICAgICA5NCxcbiAgICAgIDE1OSxcbiAgICAgIDY5LFxuICAgICAgMTczLFxuICAgICAgMjMyLFxuICAgICAgMTY3LFxuICAgICAgMjksXG4gICAgICAyMjUsXG4gICAgICAxMTgsXG4gICAgICAyMDUsXG4gICAgICAxNyxcbiAgICAgIDEwOSxcbiAgICAgIDExNSxcbiAgICAgIDE4MyxcbiAgICAgIDExMSxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWjU2WDZKUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTQ0NjA3OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVlamVyaCBvciBVbW1lZXRlcmhcIixcbiAgICBcImxpZFwiOiBcIjI3NjQwMjcwNDIyODM5MjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DcHFZSUJFTnpKdjdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTTFSRVlXYlJaSlUzTkZqR3VoaURIZkp4L2Y0SHBUc1RXVGRIVWpzVnZsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnTlByQWh1Ync1Q2FmQ2NreDRyR2ZSQ1hLYlI0WUE4Um5yZ3ZZdElkM1R0cUliZmg5ek0wN1RKUUU0elJXbFJ6dFpaUkRqSFBMSzljajRpVWtjVmxCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3M2hQOFpxSG9ESFVvSUd5alNhRGRoNU1Mb0c2OHdUZzhScyt2MzE5aHhJaTJuL05aU3kvd1o0RUxnNms0NmtVdXo3KzdXMXN5MnBJZ3dQTUc5YXREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY1NDQ2MDc5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2OTk3NzI5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
