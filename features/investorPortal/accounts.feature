@regression
Feature: Accounts Page
    Feature Description: As a IP User
    when navigate to Accounts page , validate Valuations chart on Account Page

    Background: Login to IP and Select Investor
        Given User Login to "Investor Portal" as LoginOption


    @5753338
    Scenario: Verify Asset allocation breakdown charts appear on Account Page for Investments
        Then user should verify active tab as "Accounts"
        And Verify Asset allocation breakdown charts appear on Account Page for Investments


    @5753441
    Scenario: Verify the holdings list only show holdings within that account
        Then user should verify active tab as "Accounts"
        And Verify the holdings list only show holdings within that account
        


