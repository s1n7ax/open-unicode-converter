import Rule from './models/rule';
import Config from './models/config';

/**
 * defines the functions that is used to convert language to another
 */
export default interface Converter {
    /**
     * unique id for converter class type
     * this can be used to identify the converter object type within the application
     */
    id: string;

    /**
     * a name that can be displayed in the screen
     * this can be used to display user friendly name in the UI
     */
    name: string;


    /**
     * set the configuration object for the converter
     * @param config - converter configuration that need to be used to do the conversion
     */
    setConfig(config: Config): void;

    /**
     * predict the next character according to the given letter and current word
     * @param letter - the letter that should be converted
     * @param currentWord - IF the conversion is depending on the current word, this parameter should be passed
     */
    convert(letter: string, currentWord?: string): Rule;
}
