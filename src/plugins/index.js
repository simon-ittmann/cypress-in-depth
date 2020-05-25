/**
 * Plugins
 */
module.exports = (on, config) => {
    /**
     * Will be executed before each test file!
     */
    on('before:browser:launch', (browser = {}, args) => {
        if (browser.name === 'chrome') {
            // ^ make sure this is your browser name, you may
            // be using 'canary' or 'chromium' for example, so change it to match!
            args.push('--proxy-bypass-list=<-loopback>');
            return args
        }
    });

    /**
     * Log function for debug
     */
    on('task', {
        log(message) {
            console.log(message);
            return null;
        }
    });
};
