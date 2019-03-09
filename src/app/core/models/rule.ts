export default class Rule {
    /**
     * char that match the input letter
     */
    match: string;

    /**
     * converted char
     */
    result: string;

    /**
     * number of chars that should be removed from the current word
     */
    remove: number;


    constructor(match: string, result: string, remove: number) {
        this.match = match;
        this.result = result;
        this.remove = remove;
    }
}
