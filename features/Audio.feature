Feature: Audio Player Testing

  Scenario: Navigation to the website
    Given I access the SBS URL
    When the page is loaded
    Then the title of the audio track is "SBS Hindi News 13 July 2021: More financial support amid extended NSW lockdown"

    When I click on the language toggle
    Then the dropdown with language is displayed

    When I click on the audio icon
    Then verify that the audio player is launched
    And the player has mute control
    And the player has pause control
  
    When I move progress bar behind by 20 seconds
    And I click on the pause control
    Then progress bar moves ahead by 20 seconds

    When I move progress bar ahead by 20 seconds 
    Then progress bar moves ahead by 20 seconds

    When I click on the Subscribe dropdown
    # Then the dropdown displays the "APPLE PODCASTS"
    # And the dropdown displays the "GOOGLE PODCASTS"