import Config from './models/config';

/**
 * define method to add/remove/change the configuration
 */
export default interface ConfigurationManager {
    /**
     * set config to the manager to manipulate
     */
    setConfig(config: Config): void;

    addKey(): void;

    removeKey(): void;
}
