exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        login: '../login.e2e.spec.js',
        navigation: '../navigation/*.e2e.spec.js',
        profile: '../profile/*.e2e.spec.js'
    }
}