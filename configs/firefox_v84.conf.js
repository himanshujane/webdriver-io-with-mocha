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
        browserName: 'firefox',
        browserVersion: '84.0',
        'moz:firefoxOptions': {
           // args: ['--width=412', '--height=732'],
            prefs: {
                'permissions.default.camera': 1,
                'permissions.default.geo': 1,
                'media.navigator.streams.fake': true,
                'media.navigator.permission.disabled': true,
                'geo.provider.network.url': 'data:application/json, {\"location\": {\"lat\": 12.971599, \"lng\": 77.594566}, \"accuracy\": 100.0}'

            },
        }

    }]
})


