@regression
Feature: Applications Tab Navigation
    Feature Description: As an Advisor I should verify all navigation tab
    Dashboard , Applications. Applicant etc is displaying.


    Background: Login to Application Portal
        Given User Login to "Applications" as LoginOption


    @5729375
    Scenario: Navigation - Applications
        Given Advisor navigate to Applications "dashboard"
        Given Advisor navigate to Applications "applications"
        Given Advisor navigate to Applications "accounts"
        Given Advisor navigate to Applications "applicants"
        Given Advisor navigate to Applications "illustrations"
        Given Advisor navigate to Applications "resources"
        Given Advisor navigate to Applications "templates"