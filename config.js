const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBJT3ZyRjZZTkRIRllPSXM3cmZsUnVaeXBaSGhGdzZZNGdldTl4YWFuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2dBenpCMEZDOEFQaDdyck1FNVVNalE5SUtwU0gxYmE2TVduSEpDZjFTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TW1WNnhHWGc3SkxJeDJWZnlIMnNpR0Iyd1IxZ241NTBpVEVGZTlmTGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYk9PdGIxRGljVG9jTWF0YWJWU2hNMWxZN2VNcHN2UnlPQWx2N0dlWjN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIRm1iOWdoaFF6MlZNenFzMUxBZHkrdnNra2JyVDhjNVkyUSsvS2FabWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngxU2w0dXVnMXcwTUVVT2MzRnJreTN3ZGxNd1RtZ2UzdmhKZ01NRUNQa0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lILzlaekNubkVrd05UU3dGRkxZbklySGtjM0NodnB5ay8wQllpdkkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXk1K2tuVDBubXdyM2NVUm5IWDhJM1dja2Z3N25NVm1BblZDREJBRHd5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd4Rzdzcm1yZHpDTFptT0xjK2M0UDFnVVhaNFJhY0ZaY1c1SVIyZVFUcGpNTWw5by9NOURRWVlsVGVLeSt2c0FETEliNVBkSkRPTVNXaklyaXdsTmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJTbzU4cUoyU090LzdzQlB5QU5vWStUN2c5VmZlK2tORUkvNXpmSzdtQXBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ2ODQ2NzQ1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0U2NEY4OUY3MDVDMzY5NTA5OTdEMTdFNEFBMjFEMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNTQ4NDU3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIyTk5ZV1hLUiIsIm1lIjp7ImlkIjoiOTIzNDY4NDY3NDU2OjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTUxMzQ2NjYxNTY0NDgxOjE2QGxpZCIsIm5hbWUiOiJNdWdoYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tlWjA2VUNFS1N4L01jR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZkcHlmZVFWWm9aYlZxMks1N1E5eUdsR2E2bHdCbTY5Yll6a0svRXpFaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImExdThIa0FnVEVmTHozc1UwMzdCdWxnVWsxendpOWxDaUdHdWpaNW5DMjdQMTdML01BVkM4Rmo5WlRveXVROXhmQzB6VmhHM3NqUVFTMzgrQXhWREJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRY2lYK1FzelVKT1NRczhHd3VVZUpuS1F5RVBHWFpsSFhLakNlVFF2MG15VHZWdm90QmNLZTRXMW1qaVRXS05nOEswZEMzMVgzYnVabUs3STlieHVqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ2ODQ2NzQ1NjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiM2FjbjNrRldhR1cxYXRpdWUwUGNocFJtdXBjQVp1dlcyTTVDdnhNeEl0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE1NDg0NTQsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnhZIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.imghippo.com/files/hJFA9704ByQ.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "MUGHAL-KING",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MUGHAL-KING",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923468467456",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MUGHAL-KING",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ MUGHAL-KING*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923468467456",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
