require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABBbPVxzTJNbUAQAAHMHAAAKAAAAY3JlZHMuanNvbpVU246jOBD9F792NOEeEqmlJUACud9DejUPbjDgAIa2DQRG+fcV6enpedgd9fJkyqWqU+ec8g9AcszQHDVg9AMUFFeQo+7ImwKBERiXYYgo6IEAcghGwF03r31LTl+MfHzYUsdL4yzLhUmtKWhSuHmtDC+4Tkl51p*BvQeK8jXF*h8K8n7L7dvmxMO6rTJrpxDBdubR9a2dEtVbOn2N1LMTXrai*QzuXUWIKSaRXcQoQxSmc9RsIKZfg59YrR9XjXAb4ysuY1bb7UVv91n4NCS34czbeyToqzE+kOPX4EeQzrMVO6F4dSpMVWnmch1Nb8eoj1pZO*Cn0Lrslt7lNjbe4TMcERS4ASIc8+bLvKNF2hf76zSr2Tmx8zQxfHHurfV9aAeu2qDVSmdYTBcecb8GPDyZrT8eGgHdrRVroGsyF17HwpVrqiq8Vm+Ts7lY2mY9kLa*A9*QD68k*4d3xWHxVStaJ8+NSxOo6GWzaCPY+BWx*TgSMnEuVppTh3byNfiT1enWemgZJTvnZlWL63YXeqfba0WW15Sl6Q2NKZnQbCBfPuFDXtI*odRuprfdb7xT81K0YXNZxqlNW1+R+WYTRPQYzhQkTr1zrHNGM4vm+c72llm52Lfqrdg1+NCuJ6E+pE9vzpuvJnBBnsb182OiBDVuAEbivQcoijDjFHKck0dM0noABtUe+RTxB71gsnGkyS5ZbQeSMBORqo0VGkFSyozQjBu0HwmcvNUVXtnPoAcKmvuIMRQ4mPGcNkvEGIwQA6O*v*cAQTf+LlzXThZ7IMSU8SMpizSHwYeqH5fQ9*OS8H1DfLM7IApGwmcYcY5JxDoeSwKpH+MKmTHkDIxCmDL0a0JEUQBGnJbo19aaedARb52GtiFKM9AD2UMQHIARkGRlIAwkWZNlaTCS1L*Yt7qrC4viG0Ec9ED6yJNFVdY1WRrImq6IXWIXv*9C2BUMEIc4ZWAEzJV2u774pr0K3wZLNp0abmSYkQE+J*qwxjv16MCejlaYwX0Q5+brfpZkrZs5201N8tBfL9ZyZMqhEM2P2+d*KQJGwB6*WMulpRfH*EmxSb+ZpO7uYDWR0G8m54EzRTle4f7kfCoGWSwJ2001bFF1Pgw9iTBr4MwsI26N*nmLBcHV6qiaHQzjuesWoAr76PdmezV800Vjw+W96HrHqziDa2W3usyG5UKf902ndU9NWzN9jb3LZXVem5N+5fsbCUOhcFBwSpJEhWU5zKaHw1LbB7BsjOjdtI+lSX8+Vvhhp06r7jfE6LH7BHYKfkG7d+Sdx4R777ciP5+T*1jJsZcMNqkhq1lCLtDIBPwyY80sFix9pjmyhVuuGFweumZqg*v9ew8UKeRhTjMwApAENMcB6AGal51pXRLmf2hmGsw1t9G+Gz2FjBufi3DAGWIcZgUYiQNtqOmSpOnvWRuaFw5kccfCVDGysnN1YxTFnkP+sVfA6D5HVMH9H1BLAQIUAxQAAAgIABBbPVxzTJNbUAQAAHMHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2347072363327',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Grieezbtc',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '8347460993:AAGeTJEB0D_LylwiIAxo1m--l_5yCY-izQ0',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
