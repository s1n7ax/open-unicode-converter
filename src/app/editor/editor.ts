export default interface Editor {
    /**
     * type char in the editor
     * SHOULD insert value to current cursor position
     * SHOULD remove selected text and insert new value if there is text selection
     *
     * @param char - char that should be typed
     */
    type(char: string): void;

    /**
     * remove chars
     * SHOULD remove given number of characters
     * SHOULD remove selected text first if there is text selection
     *
     * @param no - number of characters to be removed
     */
    backspace(no: number): void;

    /**
     * return current word that is being written in editor
     */
    getCurrentWord(): string;
}
