@regression
Feature: Dashboard Page
    Feature Description: As a IP User
    when navigate to Dashboard , validate 'Valuations' on Dashboard

    Background: Login to IP and Select Investor
        Given User Login to "Investor Portal" as LoginOption


    @5753045
    Scenario: Verify Personal assets and liabilities of investor on Dashboard
        Then user should verify active tab as "Dashboard"
        And Verify Personal assets and liabilities of investor on Dashboard



    @5753046
    Scenario: Verify Valuation History chart
        Then user should verify active tab as "Dashboard"
        And Verify Valuation History chart per account is displayed


    @5753047
    Scenario: Verify Activity section
        Then user should verify active tab as "Dashboard"
        And Verify Activity section of Dashboard



    @5759268
    Scenario: Verify after click on an account Account page should display
        Then user should verify active tab as "Dashboard"
        And Verify after click on an account Account page should display


    @5835438
    Scenario: Verify Investment Wrapper Summary
        Then user should verify active tab as "Dashboard"
        And Verify Investment Wrapper Summary
