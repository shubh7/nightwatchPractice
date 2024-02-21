@regression @individual
Feature: Account creation using Indiviual Applicant
    Feature Description: As a IP User
    when navigate to Accounts page , validate Valuations chart on Account Page

    Background: Login to Application Portal
        Given User Login to "Applications" as LoginOption


    @5729113
    Scenario: Individual Applicant - Create ISA
        When User creates new "Individual" Applicant
        And User creates "ISA" account using new Applicant
        Then New "ISA" Account created successfully

    @5729183
    Scenario: Individual Applicant - Create GIA
        When User creates new "Individual" Applicant
        And User creates "GIA" account using new Applicant
        Then New "GIA" Account created successfully


    @5729114
    Scenario: Individual Applicant - Create SIPP
        When User creates new "Individual" Applicant
        And User creates "SIPP" account using new Applicant
        Then New "SIPP" Account created successfully

    @5729115
    Scenario: Individual Applicant - Create International SIPP
        When User creates new "Individual" Applicant
        And User creates "International SIPP" account using new Applicant
        Then New "International SIPP" Account created successfully


    @5729185
    Scenario: Individual Applicant - Individual Applicant - Create Offshore Bond
        When User creates new "Individual" Applicant
        And User creates "Offshore Bond" account using new Applicant
        Then New "Offshore Bond" Account created successfully

    @5729187
    Scenario: Individual Applicant -  Create Offshore Bond Personalised
        When User creates new "Individual" Applicant
        And User creates "Offshore Bond Personalised" account using new Applicant
        Then New "Offshore Bond Personalised" Account created successfully

    @5729191
    Scenario: Individual Applicant -  Create Onshore Bond
        When User creates new "Individual" Applicant
        And User creates "Onshore Bond" account using new Applicant
        Then New "Onshore Bond" Account created successfully


    @5729184
    Scenario: Individual Applicant - Create Third Party SIPP
        When User creates new "Individual" Applicant
        And User creates "Third Party SIPP" account using new Applicant
        Then New "Third Party SIPP" Account created successfully


    @5729186
    Scenario: Individual Applicant - Create RTSRATS
        When User creates new "Individual" Applicant
        And User creates "RTSRATS" account using new Applicant
        Then New "RTSRATS" Account created successfully


    @5729188
    Scenario: Individual Applicant - Create QROPS
        When User creates new "Individual" Applicant
        And User creates "QROPS" account using new Applicant
        Then New "QROPS" Account created successfully


    @5729189
    Scenario: Individual Applicant - Create Personal Pension
        When User creates new "Individual" Applicant
        And User creates "Personal Pension" account using new Applicant
        Then New "Personal Pension" Account created successfully

    @5729190
    Scenario: Individual Applicant - Create Group SIPP
        When User creates new "Individual" Applicant
        And User creates "Group SIPP" account using new Applicant
        Then New "Group SIPP" Account created successfully