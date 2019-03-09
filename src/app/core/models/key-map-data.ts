import Rule from './rule';

export default class KeyMapData {
    char: string;
    rules: Array<Rule>;


    constructor(char: string, rules: Array<Rule>) {
        this.char = char;
        this.rules = rules;
    }
}
