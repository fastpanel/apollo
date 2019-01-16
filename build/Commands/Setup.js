"use strict";
/**
 * Setup.js
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const core_1 = require("@fastpanel/core");
/**
 * Class Setup
 *
 * @version 1.0.0
 */
class Setup extends core_1.Cli.CommandDefines {
    /**
     * Initialize a commands provider.
     */
    initialize() {
        this.cli
            .command('fastpanel/apollo setup', 'Configure apollo components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-f, --force', 'Forced command running.')
            .visible(false)
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                /* Info message. */
                logger.info(`${os_1.EOL}Configure apollo components.`);
                if (!this.config.get('Ext/Apollo', false) || options.force) {
                }
                else {
                    /* Info message. */
                    logger.info(` Everything is already configured. ${os_1.EOL}`);
                }
                /* Command complete. */
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
