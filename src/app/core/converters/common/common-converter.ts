import Converter from '../../converter';
import Rule from '../../models/rule';
import Config from '../../models/config';
import KeyMapData from '../../models/key-map-data';

export default class CommonConverter implements Converter {
    id = 'common';
    name = 'common (Common)';
    config: Config;

    convert(letter: string, currentWord?: string): Rule {
        const keyMapData: KeyMapData = this.config.mapping.get(letter);

        // return same character if no match found in key binding details
        if (!keyMapData) {
            return new Rule(null, letter, 0);
        }

        // skipp handling rule process if the current word is not found
        if (currentWord) {

            // return default char if no additional rules are found
            if (!keyMapData.rules) {
                return new Rule(null, keyMapData.char, 0);
            }

            // handle rules
            const ruleResult = this.handleRules(currentWord, keyMapData);
            if (ruleResult) {
                return ruleResult;
            }
        }

        // if match found but not matched to any rules, default character will be returned
        return new Rule(null, keyMapData.char, 0);
    }

    setConfig(config: Config): void {
        this.config = config;
    }

    // helper functions
    private handleRules(currentWord: string, keyMapData: KeyMapData) {
        // looping through rules to find a match
        for (const rule of keyMapData.rules) {

            // check defined variables
            const variableRegex = new RegExp(/<%([\w\d]*)%>/);
            const match = variableRegex.exec(rule.match);

            if (match !== null) {
                const variableValArr: Array<string> = this.config.variables.get(match[1]);

                // throw if the used variable is not defined in the variable section in the configuration
                if (!variableValArr) {
                    throw new Error('No configuration variable found with key: ' + match[1]);
                }

                // get the last letter from the current word and match with variable value array for match
                const matchIndex = variableValArr.indexOf(currentWord[currentWord.length - 1]);
                if (matchIndex >= 0) {
                    return rule;
                }
            }


            // if the length of the currentWord is higher than the rule iteration will be skipped
            if (currentWord.length < rule.match.length) {
                continue;
            }

            const currentWSubstring = currentWord.substring(
                currentWord.length - rule.match.length,
                currentWord.length
            );

            // if a rule matched the history rule will be returned
            if (rule.match === currentWSubstring) {
                return rule;
            }
        }
    }
}
