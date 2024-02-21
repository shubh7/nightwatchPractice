@regression
Feature: Settings Page
    Feature Description: As a IP User
    when navigate to top right hand corner tab
    and click on each of "moon", "currecy", "Status/Refresh" links
    The result should be populated successfully


    Background: Login to IP and Select Investor
        Given User Login to "Investor Portal" as LoginOption



    @5754210
    Scenario: Verify Night mode
        Then user should verify active tab as "Dashboard"
        And Validate night mode is working as expected



    @5681303
    Scenario: Verify Currency selection
        Then user should verify active tab as "Dashboard"
        And Verify market valuation should be updated based on the currency selected



    @5759257
    Scenario: Verify Default currency
        Then user should verify active tab as "Dashboard"
        And Verify at the top right hand corner default currency should be displayed as "GBP£"



    @5759258
    Scenario: Verify Refresh/Sync accounts
        Then user should verify active tab as "Dashboard"
        And Verify Refresh and Sync should be working as expected


    @5835436
    Scenario: Verify Accounts for the client
        Then user should verify active tab as "Dashboard"
        And Verify after click on client dropdown list of accounts should be visible
