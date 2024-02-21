@regression
Feature: Applicant and Application Mandatory Fields Validation
    As An Advisor validate applicant and application mandatory fields

    Background: Login to GlobalApps and Select Applications
        Given User Login to "Applications" as LoginOption

    @5729348  
    Scenario: Individual Applicant Mandatory Fields Validation
        When User creates new Applicant to verify FATF countries 
        Then Verify the "errorMessage" error message and accounts button disbaled

    @5729362  
    Scenario: Individual Applicant Mandatory Fields Validation
        When User creates new Applicant to verify FATF countries  
        Then Verify the "AccountsbuttonDisabled" error message and accounts button disbaled