const { I } = inject();
// Add in your custom step files

Given('I access the SBS URL', () => {
  I.amOnPage('/language/english/audio/sbs-hindi-news-13-july-2021-more-financial-support-amid-extended-nsw-lockdown');
});

When('the page is loaded', () => {
  I.seeInCurrentUrl("sbs-hindi-news-13-july-2021-more-financial-support-amid-extended-nsw-lockdown");
});


Then('the title of the audio track is {string}', () => {
I.seeInTitle("SBS Hindi News 13 July 2021: More financial support amid extended NSW lockdown");
});

When('I click on the Subscribe dropdown', () => {
  I.click({xpath:'//*[@id="mod-dropdown_module-2"]/div[1]/span[2]'});
});

When('I click on the audio icon', () => {
  I.click({xpath:'//*[@id="mod-audiotrack_module-1"]/div[1]/div/div[3]/button/span'});
  
});
Then('verify that the audio player is launched', () => {
  I.seeElementInDOM('//*[@id="mod-audio-player_module-1"]');  
});

Then('the player has play control', () => {
  I.seeElementInDOM({xpath:'//*[@id="mod-audio-player_module-1"]/div[3]/div[4]/div[1]/button'});
});

Then('the player has pause control', () => {
  I.seeElementInDOM({xpath:'//*[@id="mod-audio-player_module-1"]/div[3]/div[4]/div[1]/button'});
});

Then('the player has mute control', () => {
  I.seeElementInDOM({xpath:'//*[@id="mod-audio-player_module-1"]/div[3]/div[4]/div[2]/button'});
});

When('I click on the mute control', () => {
  I.click({xpath:'//*[@id="mod-audio-player_module-1"]/div[3]/div[4]/div[2]/button'});
});

Then('the volume is reduced to zero', () => {
  I.seeElement({xpath:'//*[@id="mod-audio-playe;r_module-1"]/div[3]/div[4]/div[2]/button'});
  I.seeCssPropertiesOnElements({xpath: '//*[@id="mod-audio-player_module-1"]/div[3]/div[4]/div[2]/button'},  { 'style': "width: 0%;"});
});

When('I move progress bar ahead by 20 seconds', () => {
  I.click({xpath:'//*[@id="mod-audio-player_module-1"]/div[4]/div[4]/button[4]'});
});

When('I click on the pause control', () => {
  I.click({xpath:'//*[@id="mod-audio-player_module-1"]/div[4]/div[4]/div[1]/button'});
});

When('I move progress bar behind by 20 seconds', () => {
  I.click({xpath:'/html/body/div[1]/div[2]/div[4]/div[4]/button[3]'});
 });

 When('I click on the language toggle', () => {
  I.click({xpath:'//*[@id="mod-dropdown_module-1"]/a'});
});

Then('the dropdown with language is displayed', () => {
  I.seeElement({xpath:'//*[@id="mod-language-toggle_module-1"]/div/ul/li/div'});
 
});

// Then('the dropdown displays the following podcasts', (string) => {
//   for (let count = 0; count < 3; count++ )
//    {
//       xPathVaraible = '//*[@id="mod-dropdown_module-2"]/div[2]/div/ul/li['+count+1+']';
//       I.seeTextEquals(PODCASTS,xPathVaraible)
//    }

// });