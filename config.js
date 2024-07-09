const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348062871662";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_25_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJldmdubWltSmdKMHBVcGRsdDg0bFBCMGdtREs5cGl4ZzBZd2t4RDdmbGVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjaUxTR2tiM1JPS3NwaGM5WFRVaDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4Y2IxYzQwLWFkZDctNGZiNS05OWI5LTkwYmEyOGQyM2Y1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICA1NCxcbiAgICAgIDIyNCxcbiAgICAgIDIxOCxcbiAgICAgIDEwNyxcbiAgICAgIDEyNyxcbiAgICAgIDE0MSxcbiAgICAgIDQsXG4gICAgICA4MSxcbiAgICAgIDEzOSxcbiAgICAgIDgwLFxuICAgICAgMTgsXG4gICAgICAyMzEsXG4gICAgICAyNDcsXG4gICAgICAxNzcsXG4gICAgICAyMTQsXG4gICAgICAxODUsXG4gICAgICAxODcsXG4gICAgICAxMSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICA2MCxcbiAgICAgIDEyLFxuICAgICAgMjQyLFxuICAgICAgMTYxLFxuICAgICAgODUsXG4gICAgICAxNjIsXG4gICAgICA5MyxcbiAgICAgIDExMixcbiAgICAgIDI0NixcbiAgICAgIDM5LFxuICAgICAgMjUxLFxuICAgICAgMCxcbiAgICAgIDE3MSxcbiAgICAgIDgwLFxuICAgICAgNjAsXG4gICAgICAyNTEsXG4gICAgICAxMjEsXG4gICAgICA3MixcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJIODhBODdFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYyODcxNjYyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcmluY2VzcyBPbGFqaWRlXCIsXG4gICAgXCJsaWRcIjogXCI2ODkzNTczNTA5MjgwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZDZ2NZR0VKYTV0clFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0bzc5WXZ5SXVWSHVIaUNaaVY0T3IrNU5vajlFckRaZlFPZ0hqa3NZNjJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlCNG9rZXBLd1RuU3VkL2lGdjQyT3pHSWpwb3RYdHFLWEpPNjROU1pURlhJWkJaWkxIbWtqT2pSbUUrZ0dWWTU1SjVLUmVvYTlzOSsxNjNzekkwU0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpkM1luUVVOOE55SnlKbWIrZDBGZ1hWSkFjNnB2Unl1dENaN1JGc1JIMzlsam96S3RvNmMrMmJHVURTY0tBVDM5SkJEY0xlRGRpYWpZVTcyRlF5UGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjI4NzE2NjI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTU2Njk4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
