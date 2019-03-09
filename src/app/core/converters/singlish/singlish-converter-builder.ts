import ConverterBuilder from '../../converter-builder';
import Converter from '../../converter';
import singlishConfig from './config.json';
import SinglishConverter from './singlish-converter';
import KeyMapData from '../../models/key-map-data';
import Config from '../../models/config';

export default class SinglishConverterBuilder implements ConverterBuilder {
    private static jsonToMap<T>(json: any): Map<string, T> {
        const map = new Map<string, T>();

        for (const key of Object.keys(json)) {
            map.set(key, json[key]);
        }

        return map;
    }

    get(): Converter {
        const config = new Config();
        config.mapping = SinglishConverterBuilder.jsonToMap<KeyMapData>(singlishConfig.mapping);
        config.variables = SinglishConverterBuilder.jsonToMap<Array<string>>(singlishConfig.variables);

        const converter = new SinglishConverter();
        converter.setConfig(config);

        return converter;
    }
}
