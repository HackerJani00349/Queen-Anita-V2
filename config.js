//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:********@autorack.proxy.rlwy.net:43707";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb://mongo:********@autorack.proxy.rlwy.net:43707";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "923163359737 923069197719";
global.owner = process.env.OWNER_NUMBER || "923163359737 923069197719";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib08vZVJBVTRGU01idTNOa3pwY3l3Q3VkZ2pkYmtVb25uQWNlV0xLWkUycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnp0b1Rkd1p4WjUvL2lacXJyUWpHUjdmbVVHL1haU0k2UzBEQ0d5VS9TUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Sm1aZlQ4Nm1FYldHdlJpMnN3TlRXeGQrYmJ0OElFSGUxQ1ZWQlZ6TWtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4K2hqUjJGcVhrQzd5d3NuM2FmUkJlQ1R4S0JqY0R5cTlndkVkaHBpOWswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJT0Z5V0RHRmlYbmRtSWw4UHd2V094TlREcFI3QW00YmdhSGEvTHNwMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik40TG9jMWppSS9IMmVjeXRoMzRhVWwyMm9uRDh1TnJ4QWFFRlBNZmJFejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk8xcHZuUzNIdjFkaUs4dC9rYlZtcnRTZzhrNjRVVTc2dDdNdUhqMy8zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJkUXE1dTZGNWJwelgxblJYZXltTlRySEZCWUEyWXRkTytPQTJMV0NtND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtucWNFMGJkclVkRS9RMlZheVFzaGhESER0RkhPTG4yMkpkbWp5VUI3RG9OdVlJTUN1VWNFejFPM0NZWGFBMUZkNlJtUEh2ZEdXZkk4UW5UMTNFWkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6Im14TE8xcDMxeDlWYmh3YUFDY2lnZzVXck9QTUNUbnVwbUI3OXdBY1NucTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDAzMDgxMDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyQjA3N0MzODdCQURCMzUyNTI1NkE3RjRGODg2MDY4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU2MDg3NTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAwMzA4MTAzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRkYxMjU5RkYwRTQ4MUUyRUU0RTkyQ0RDNDRENDZCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjA4NzU4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1cWZqeFMyN1FEQzlTM25Qd3A5Rnl3IiwicGhvbmVJZCI6ImU2ZDA4YThmLTc1NjEtNDJkNS1iOGNkLTYyZTc2ODBhY2Y5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaldFc1VQOEZmT3NTbTZQRitFclg1YlE2VVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3Q4Vld6VlBmKzFoeEZyL01mOE9ML2pUb3FBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdOMks2RUc2IiwibWUiOnsiaWQiOiI5MjMwMDMwODEwMzg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIYXNzYW4uQXJhaW7wn5iOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVE43YlFHRUo3bTZyWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2T2U4R3Z6OU54TStQNWVuWmViL2s1czJhUFcxV1F6YlZoTk9wYTVnaFhJPSIsImFjY291bnRTaWduYXR1cmUiOiJRUWY4NUxoRWRWeVZ4YnVhSHgvaUJmKzhsWDFOZ3ZsejFhOWhFYnErSVhodE9scy8xZTlLU21acjlJTkt5akZuRVFaU3VVOHBqM0NLeXdyUGZHZG9Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUdLZHg5ZE9QYmM3enFhN0hTK2lOTUVXRk5lR2pVQ3hZckdoVWwvUmU3VkN0SjRWMUtFekYwNGNzSGFNYk1MKzR1Y0ErUklvT3RhVnVZQzhFanV4QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMDMwODEwMzg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlam52QnI4L1RjVFBqK1hwMlhtLzVPYk5tajF0VmtNMjFZVFRxV3VZSVZ5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjA4NzU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpSQyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "HASSAN_ARAIN_V5",
  ownername: process.env.OWNER_NAME || "HASSAN Hacker MD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "HASSAN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
