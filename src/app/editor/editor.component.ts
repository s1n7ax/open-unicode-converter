import {Component, ElementRef, OnInit} from '@angular/core';
import Quill, {TextChangeHandler} from 'quill';
import Editor from './editor';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, Editor {
    private editor: Quill;


    constructor(private elRef: ElementRef) {
    }

    ngOnInit() {
        const editorEle = this.elRef.nativeElement.firstChild as HTMLElement;

        this.editor = new Quill(editorEle, {
            modules: {
                toolbar: true
            },
            placeholder: 'Write something beautiful!',
            theme: 'snow'
        });
    }

    backspace(no: number): void {
        const selection = this.editor.getSelection(true);

        this.editor.deleteText(selection.index - no, selection.length + no);
    }

    getCurrentWord(): string {
        const index = this.editor.getSelection(true).index;
        const text = this.editor.getText();

        let i = index - 1;
        for (; i > 0; i--) {

            if (text[i] === ' ' || text[i] === '\n') {
                // increase the value of i to skip the space or new line
                i++;
                break;
            }
        }

        return this.editor.getText(i, index - i);
    }

    type(char: string): void {
        const selection = this.editor.getSelection(true);
        const text = this.editor.getText();

        this.editor.deleteText(selection.index, selection.length);
        this.editor.insertText(selection.index, char);
    }

    onTextChange(callback: TextChangeHandler) {
        this.editor.on('text-change', callback);
    }
}
