const baseConfig = require('./baseShared.conf.js');
const merge = require('deepmerge')

exports.config = merge(baseConfig.config, {

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],

    // ============
    // Multi Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    capabilities: [{
        acceptInsecureCerts: true,
        browserName: 'chrome',
        browserVersion: '87.0',
        'goog:chromeOptions': {
            excludeSwitches: ["enable-automation"],
            useAutomationExtension: false,
            //mobileEmulation: { 'deviceName': 'Nexus 4' },
            args: ['--lang=en',
                //'--window-size=412,732',
                //'--use-fake-ui-for-media-stream',
                //'--use-fake-device-for-media-stream',
                '--unlimited-storage',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-notifications',
                'disable-infobars',
                '--disable-web-security'
            ]
        }
    },
    {
        acceptInsecureCerts: true,
        browserName: 'firefox',
        browserVersion: '84.0',

    }]
})