"use strict";
/**
 * Extension.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@fastpanel/core");
/**
 * Class Extension
 *
 * Initialization of the extension.
 *
 * @version 1.0.0
 */
class Extension extends core_1.Extensions.ExtensionDefines {
    /**
     * Registers a service provider.
     */
    async register() {
        /* Registered cli commands. */
        this.events.once('cli:getCommands', (cli) => {
            const { Setup } = require('./Commands/Setup');
            (new Setup(this.di)).initialize();
        });
    }
    /**
     * Startup a service provider.
     */
    async startup() { }
}
exports.Extension = Extension;
/* End of file Extension.ts */ 
