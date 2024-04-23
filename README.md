### Pre-requisites

Git

Nightwatch

VSC

### Getting started 

You need to have the following tools installed on your computer. Node.js v12.10.0 or higher, npm v6.11.3 or higher. To install both tools you can download them from the Node.js website 

### Cloning Repo to local

Cloning the git repository: Import this project into VSC

```


```
### Install dependencies by running 

npm install

## How to run CLI
## All the points below are pointing to the package.json
We need to add chromedriver version in dependencies as per local chrome browser version:
Example: "chromedriver": "^101.0.0"

## How to run tests locally


To run Single scenario in Chrome Browser, pass scenario tag(--tags @tagName) in script local package.json and run the script: local-test

In terminal, switch to Git Bash, and run the command:

npm run local-test

## How to run tests in Azure Pipelines

# Trigger pipeline from Azure Devops UI
Examples:


2. Check Enable System diagnostics -> Run

3. To check execution result , open latest run -> Click on published -> Expand nightwatch_execution_results to download execution report

## How to run tests in Azure Pipelines using Azure cli




## How to Debug tests locally

Hover over Script name: debugSingleTestFile, and click on Debug Script option


### How to access global variables in Test


## Feature Files

All the scenarios written in GWT format in feature file
features

## Step definitions

Scripts of feature files we can find in step_definitions folder
