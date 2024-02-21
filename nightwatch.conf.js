const env = process.env.KEY;
const envData = require(`../configs/environments/${env}.json`);
const userData = require(`./configs/users/usersConfig${env}.json`);
const testData = require("./testData/testData.json");


const chrome_webdriver = {
    start_process: true,
    server_path: "",
    port: 9515,

};

const settings ={
    src_folders: ["step_definitions"],
    page_objects_path: ["pages"],
    custom_commands_path: ["custom-commands", "../utility","../configs"],

    test_settings: {
        default: {
            globals_path: "globalSetup.js",
            globals: {
                userConfig: userData,
                testDataConfig: testData,
                envDataConfig: envData,
                environment: env,
            },
            test_runner: {
                type: "cucumber",
                options: {
                    feature_path: "./features",
                },
            },
        },
        chromeHeadless: {
            desiredCapabilities: {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "goog:chromeOptions": {
                    args: [
                        "--no-sandbox",
                        "--ignore-certificate-errors",
                        "--headless",
                        "--disable-gpu",
                        "--accept-alerts",
                        "window-size=2000,3000",
                        "--disable-dev-shm-usage",
                        "--incognito",
                    ],
                },
                "w3c": false,
            }},

        chromeBrowser: {
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: [
                        "--no-sandbox",
                        "--ignore-certificate-errors",
                        "--disable-gpu",
                        "--accept-alerts",
                        "--incognito"
                    ],
                },
                w3c: false,
            },
        },
    },
};

console.log("Initializing with Webdriver");
settings.webdriver = chrome_webdriver;
module.exports = settings;
