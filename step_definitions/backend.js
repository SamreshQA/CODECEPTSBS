const { I } = inject();
// Add in your custom step files

Given('I access the SBS API URL', () => {
    I.sendGetRequest('/guide/ajax_radio_program_catchup_data/langauge/hindi/location/NSW/sublocation/Sydney');
    this.helpers['REST']._executeRequest({
        url,
        data,
     });
});



