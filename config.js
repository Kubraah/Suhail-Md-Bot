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

  sessionName:process.env.SESSION_ID || "SUHAIL_20_13_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0c3FsUDJvZXJzTTJvNlJtb0RrN3pkL1gyTXM4WVV6RmoxVDBObkU5RW5RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmWTItYXFCbVFpT2x4NnBtVzluc0RBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1MTdiNjNhLTU1NmEtNDA0Zi1iZGRjLWM0ZDBkZWFkODQ3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAyMjYsXG4gICAgICAyNTEsXG4gICAgICAxMjAsXG4gICAgICA2NyxcbiAgICAgIDI0NixcbiAgICAgIDEzOCxcbiAgICAgIDE0MSxcbiAgICAgIDE4NixcbiAgICAgIDE5MixcbiAgICAgIDIwNixcbiAgICAgIDI0OCxcbiAgICAgIDIxMSxcbiAgICAgIDIzOCxcbiAgICAgIDIwMSxcbiAgICAgIDE0NSxcbiAgICAgIDEzMSxcbiAgICAgIDYxLFxuICAgICAgMTI2LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDE2LFxuICAgICAgMTM3LFxuICAgICAgNzUsXG4gICAgICAxNzAsXG4gICAgICAxMjEsXG4gICAgICA5NSxcbiAgICAgIDExNSxcbiAgICAgIDI0NixcbiAgICAgIDQsXG4gICAgICAxMTYsXG4gICAgICA3MyxcbiAgICAgIDE4OCxcbiAgICAgIDEyMSxcbiAgICAgIDE4NCxcbiAgICAgIDE3OSxcbiAgICAgIDE5NyxcbiAgICAgIDIyOCxcbiAgICAgIDIxMCxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDRktZWVA1UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTQ0NjA3OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVlamVyaCBvciBVbW1lZXRlcmhcIixcbiAgICBcImxpZFwiOiBcIjI3NjQwMjcwNDIyODM5Mjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DcHFZSUJFT3owd2JjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTTFSRVlXYlJaSlUzTkZqR3VoaURIZkp4L2Y0SHBUc1RXVGRIVWpzVnZsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkR0hXeGJNaDFvM0FSUmhHdm5vdDhPVGhtdDVaSXlxUFlnS3JEUTZWNHBuK3RkemlSQlA0eEZ5ZEh6NUhWL2lJc3Q0cGNJOEZGa1JJYzU0diszSjVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWZVQwSFVrdVlWOHd6dlZIUFlkRmtQTmcxbVZkRkZuNkxIVlZCMlpleG9jYXJ2azRTR0RXMkttTzJFNm50NVR1djgweUFYa3oxQ3BVTVBZeGVxZDZpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY1NDQ2MDc5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MDM2MDE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
