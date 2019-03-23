import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import Quill from 'quill';
import Editor from './editor';
import {EditorService} from './editor.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, Editor {
    private editor: Quill;


    constructor(private elRef: ElementRef, private editorService: EditorService) {
    }

    ngOnInit() {
        const editorEle = this.elRef.nativeElement.querySelector('#editor');

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

        this.editor.deleteText(selection.index, selection.length);
        this.editor.insertText(selection.index, char);
    }

    @HostListener('keypress', ['$event'])
    onKeyPress(event: KeyboardEvent) {
        this.editorService.onKeyPress.emit(event);
    }
}
