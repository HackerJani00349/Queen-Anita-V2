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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhCK1BBSkM1Wk9GY1BmWnZLQnhNSk9KQVpMeitCM3dhYm9IN0kxbUhIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjJlc1lGOUlsWEJGSWsxbDJPQVl5WmJpeFFsYkpBTTBWMjRpMzZ3b25Ecz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRWJFQitFdk5Pb1Rra3VoWUIzUkszL3dkVWpSc0lOOU13aEIwbDlMa1djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RW1oaFZHUGlsM1dRRzZaSnptQWhWa1FPbU1TVTJnZG4yWjVnR1BXUG5nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CQUJJaCs4N1RlWmtJWVpaUE1sYTVnVjRISGtHcmpyZkRXcDRSa0MrMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY0dFdJcndsWjdSWTRXUlV4V2dDYU5JK1hxQng4bUZ5aVJXdUw5T25aaGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhGb2NWeGhYRUxYV0poOEc4cjhMKzIyaHFwZFJxZFkxNDBja2c0ak0yMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXB2QjN1TkNLZmFxVytlV0h4ak1MUGl6aTduMjVaa3ZsVU1IK2JDVlh6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtV2JGdktsMFVWT2syQWoxYzlCbGlLQm9GeGNGV3BTcWoyaHJILy9xekNPMnl5cHAxLzNYZUVDOTRKbkJ2UDJKaWhvRWVQQXRRbzk0NzlXM0hCaURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6Ik9OTXZTWkc5U2Vvb2NWZGxRTm9lK2txaWIyOER3NkNIMHhJTmZUYW5kSjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDAzMDgxMDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY3QkNENzQzQzVBNDZFQTBFQkYzOEU5QkYwMDY5N0U5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU2ODcyODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAwMzA4MTAzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGODI5QjlGRTMwOEVDNDhDM0MzRDdBMEU1NjkxRjE2RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Njg3Mjg4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjVFRKQldtV1NCT21ldk5KblJEN3BnIiwicGhvbmVJZCI6IjA5OWU4M2VjLTZmY2EtNDM1OC04M2ExLTg4MWI5YjY1MzA2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKaVF4UkhKZTl5dXFySGk4ZW5MY0o3QS9VMXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5Zc3JnRzJyT1poa01rR1hEbi9jN04wbGQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkcxTVlCOFIyIiwibWUiOnsiaWQiOiI5MjMwMDMwODEwMzg6NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlhON2JRR0VPbkw3N1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNk9lOEd2ejlOeE0rUDVlblplYi9rNXMyYVBXMVdRemJWaE5PcGE1Z2hYST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV05GVXhkSzNmaEk0UldJODlkczloeDd6Z3h4VHgrNkU0dUNiRisySzljeG9sZWJOdWpoRExNaC9UcWlUc0JhYS8zeHdnZW5Sc1lwTUw0MGo5VEh2Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ikdhb2RldnpZdVNIR2N2WEoveGxwM045WHRLWFpHMWtYeTJKOWVndndoYXU3b0oxZzJxWFZYeU02bmZ6RXhpQlJUSWJiM3lOMENqZGtKVWhrNlNtQkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDAzMDgxMDM4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWpudkJyOC9UY1RQaitYcDJYbS81T2JObWoxdFZrTTIxWVRUcVd1WUlWeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTY4NzI4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLUzgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Hassan T_Y Bot™`",
  author: process.env.PACK_AUTHER || "Hassan MD bot",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "Hassan MD",
  ownername: process.env.OWNER_NAME || "HASSAN MD",
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
