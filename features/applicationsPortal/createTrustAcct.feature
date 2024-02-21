@regression
Feature: Account creation using Trust Applicant
    Feature Description: As an Advisor , Create Trust Applicant and using that applicant create different accounts

    Background: Login to Application Portal
        Given User Login to "Applications" as LoginOption


    @5729192
    Scenario: Trust Applicant - Create GIA
        When User creates new "Trust" Applicant
        And User creates "GIA" account using new Applicant
        Then New "GIA" Account created successfully


    @5729193
    Scenario: Trust Applicant - Create Offshore Bond
        When User creates new "Trust" Applicant
        And User creates "Offshore Bond" account using new Applicant
        Then New "Offshore Bond" Account created successfully


    @5729194
    Scenario: Trust Applicant - Create Offshore Bond Personalised
        When User creates new "Trust" Applicant
        And User creates "Offshore Bond Personalised" account using new Applicant
        Then New "Offshore Bond Personalised" Account created successfully


    @5729195
    Scenario: Trust Applicant - Create Onshore Bond
        When User creates new "Trust" Applicant
        And User creates "Onshore Bond" account using new Applicant
        Then New "Onshore Bond" Account created successfully