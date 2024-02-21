### Pre-requisites

Git

Nightwatch

VSC

### Getting started 

You need to have the following tools installed on your computer. Node.js v12.10.0 or higher, npm v6.11.3 or higher. To install both tools you can download them from the Node.js website 

### Cloning Repo to local

Cloning the git repository: Import this project into VSC

```
$ git clone https://dev.azure.com/onglobalplatform/Test%20Automation/_git/iwpt_ui_automation

```
### Install dependencies by running 

npm install

## How to run CLI
## All the points below are pointing to the package.json
We need to add chromedriver version in dependencies as per local chrome browser version:
Example: "chromedriver": "^101.0.0"

## How to run tests locally

Examples:
Change Directory/Package
eg; cd onboardingEngagement
To run test locally, run the script: local-test
Change cross-env KEY=TEST to run on Test
Change cross-env KEY=UAT to run on UAT
To Pass test cases in TestRail switch TESTRAIL=YES else TESTRAIL=NO

To run Single scenario in Chrome Browser, pass scenario tag(--tags @tagName) in script local package.json and run the script: local-test

In terminal, switch to Git Bash, and run the command:

npm run local-test

## How to run tests in Azure Pipelines

# Trigger pipeline from Azure Devops UI
Examples:
To run tests in Azure
1. Goto Pipelines -> Select iwpt_ui_automation(1) pipeline -> Click on Edit(if want to run on specifice environments and tag) -> Click on Variables -> Change Execution enviroment and execution_tag and package name -> Save

2. Check Enable System diagnostics -> Run

3. To check execution result , open latest run -> Click on published -> Expand nightwatch_execution_results to download execution report

## How to run tests in Azure Pipelines using Azure cli

az pipelines run --branch <branch which need to run as part of pipeline> --name iwpt_ui_automation --variables execution_environment=TEST
execution_tag=@smoke --project "Test Automation" --organization https://dev.azure.com/onglobalplatform


## How to Debug tests locally

Hover over Script name: debugSingleTestFile, and click on Debug Script option


### How to access global variables in Test

Example js file: loginToGlobalApps.js

To read environment ==> client.globals.environment
To read user config file ==> client.globals.userConfig
To read proposal test data file ==> client.globals.testDataConfig
To read other test data file ==> client.globals.otherDataConfig

## Feature Files

All the scenarios written in GWT format in feature file
features

## Step definitions

Scripts of feature files we can find in step_definitions folder