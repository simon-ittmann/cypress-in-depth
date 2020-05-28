/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            // ^ make sure this is your browser name, you may
            // be using 'canary' or 'chromium' for example, so change it to match!
            launchOptions.args.push('--proxy-bypass-list=<-loopback>');
        }
        return launchOptions
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
