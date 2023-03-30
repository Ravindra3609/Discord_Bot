const { REST, Routes } = require('discord.js');



const commands = [
    {
      name: 'create',
      description: "create a new short URL",
    },
  ];


  const rest = new REST({ version: '10' }).setToken("MTA5MDg2MDg4MTgxNjA1OTk3NA.GNsRJw.WuK0GtqcoP2K51_ZrFE4L3oOwS5SS4taVqglDg");

  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await rest.put(Routes.applicationCommands("1090860881816059974"), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();


