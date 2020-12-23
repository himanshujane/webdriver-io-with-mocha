const baseConfig = require('./baseShared.conf.js');
const merge = require('deepmerge')

exports.config = merge(baseConfig.config, {
    
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],

    // ============
    // Capabilities
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
            mobileEmulation: { 'deviceName': 'Nexus 4' },
            args: ['--lang=en',
                //'--window-size=412,732',
                '--use-fake-ui-for-media-stream',
                '--use-fake-device-for-media-stream',
                '--unlimited-storage',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-notifications',
                'disable-infobars'
               // '--disable-web-security'
            ],
            prefs: {
                // 0 - Default, 1 - Allow, 2 - Block
                'profile.managed_default_content_settings.geolocation': 1,
                'profile.default_content_setting_values.media_stream_camera': 1,
                'credentials_enable_service': false,
                'profile.password_manager_enabled': false
            },
        }

    }]
})