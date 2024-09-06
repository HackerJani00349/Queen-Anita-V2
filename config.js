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
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
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
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VuWGU3OGQ5b1ZwZ0tjQ0YvNHFnRXhibXM3UlhMMkFuUi9Tb2MwQTExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3cxNFBveFM2YUpFWHZBUGlESU9NRDhTc1RFZDBwaDdlUEIyRFZvRGpVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Rjg0SDl2SEVmRUlmbE0zQSs5RUgvN2RQaXdoUDREQUluL09wMmdKYjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYWZ3WnptMGNPdDU1c1VQOVRydm44UXBCTkNIODQ3L3JUWGpkMWFjM2xNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDRm5UVFNiOWtNWWp2NHRPSUphN3hTNkhlSVBROWNORndnNkh6cXpJWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImExSXA5bDI5c0Q5QVhrUGF1blVQM1BqelhsMEhicWFXT2VOMHJEbnN6d2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01rNkZxeWVsdkRuUkIxOVdTM0JBd1NNVWpaNEtpZVc0SHAzU2lBcGFGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidy9abXpHMDIvQ0ludTBSVnZXeVpmZU1xYnJqRGJmR0ZDblhQVnN4TEJ5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik91VFl2TDdnamdIdEd4VzdlUEZXNE5FcTU5ZzBMdzR1TXV1VzEzRjZlaytVTG5BbWpFOWQ1dmptbFZ2R3M3a2hwQmZFZmErUllreUwvd0pjZmVta2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImxSRlBjS09PblJyTkxNWW5EQTg4MG9oRGM3akZMcHk5eWFWUnl2czJqRk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkV6aU0xazJ3U3ptbjl1REIwS09vU2ciLCJwaG9uZUlkIjoiZWQ5NzUwMDItZmVmMy00ZmVjLWFhMDYtODlhZmU3ZWQwNmI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNalJEMXVoVUZqL0o1ekdqc2tubXdueUtTOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVFJtYVVJaUdqdlU4Rm1maUMxTE5zMmJ1bm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjRGMVlaR0YiLCJtZSI6eyJpZCI6IjkyMzE2MzM1OTczNzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmq7wnZqr8J2QkvCdkJLwnZqr8J2atCDwnZqr8J2aqvCdmqvwnZqw8J2atOKBt8Kz4oG3In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQamN3WmNDRUluazZiWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWam4zQzlybWhoVnhtMnJIWTNBMk1rZ0UwQVFMV2dkZnQ1M25hZm5sVVQ0PSIsImFjY291bnRTaWduYXR1cmUiOiJqUXViMnlkaHlPMUtSMWMwYnpxZzhXSDMyUTB0OWdCQk5DRi8ydThiazJpbTlObFV1N1dmUWdKdUdHMnBxQ092a0FMZkFob01NYWJsMFpVODFsV3REQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaTAyaGd2MW9EbXRBalVzeXZtNnZVMUVhcGZYZmQzdG9vUGhKVHd0aFNFU21ib0E2OCtBbXRLLzg1NkJIL0RQK1VTWlk3RVBLM1MzN2Fsdmd3TlA4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNjMzNTk3Mzc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWWTU5d3ZhNW9ZVmNadHF4Mk53TmpKSUJOQUVDMW9IWDdlZDUybjU1VkUrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTkyMDg2fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "LORA-MD-V2",
  ownername: process.env.OWNER_NAME || "Lora Le Le mera",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
