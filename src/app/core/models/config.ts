import KeyMapData from './key-map-data';

export default class Config {
    variables: Map<string, Array<string>>;
    mapping: Map<string, KeyMapData>;
}
