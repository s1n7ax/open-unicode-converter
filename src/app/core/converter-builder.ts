import Converter from './converter';

/**
 * build the converter for the current language
 */
export default interface ConverterBuilder {
    get(): Converter;
}
