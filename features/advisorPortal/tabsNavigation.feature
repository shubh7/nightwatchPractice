Feature: Advisor Portal Tab Navigation
    As an advisor
    I want to navigate between different tabs in the Advisor portal
    So that I can access different functionalities and information easily

    
    Background: Login to GlobalApps and Select Advisor Portal
        Given User Login to "Advisor Portal" as LoginOption

    @5839632
    Scenario: Dashboard-Widget to display
        When Advisor click on the "dashboard" tab
        Then Advisor should be redirected to the Dashboard page
        # Given Advisor on the Advisor portal home page
        # When I click on the Dashboard tab
       

    # Scenario: Navigating to the Clients tab
    #     Given I am on the Advisor portal home page
    #     When I click on the Clients tab
    #     Then I should be redirected to the Clients page

    # Scenario: Navigating to the Reports tab
    #     Given I am on the Advisor portal home page
    #     When I click on the Reports tab
    #     Then I should be redirected to the Reports page

    # Scenario: Navigating to the Settings tab
    #     Given I am on the Advisor portal home page
    #     When I click on the Settings tab
    #     Then I should be redirected to the Settings page
