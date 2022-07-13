import { Component, ElementRef, HostListener, OnInit } from '@angular/core'
import Quill, { Key } from 'quill'
import Editor from './editor'
import { EditorService } from './editor.service'

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, Editor {
    private editor: Quill

    constructor(
        private elRef: ElementRef,
        private editorService: EditorService
    ) { }

    ngOnInit() {
        const editorEle = this.elRef.nativeElement.querySelector('#editor')

        this.editor = new Quill(editorEle, {
            modules: {
                toolbar: true,
            },
            placeholder: 'Write something beautiful!',
            theme: 'snow',
        })

        this.editor.focus()
    }

    backspace(no: number): void {
        const selection = this.editor.getSelection(true)

        this.editor.deleteText(selection.index - no, selection.length + no)
    }

    getCurrentWord(): string {
        const index = this.editor.getSelection(true).index
        const text = this.editor.getText()

        let i = index - 1
        for (; i > 0; i--) {
            if (text[i] === ' ' || text[i] === '\n') {
                i++
                break
            }
        }

        return this.editor.getText(i, index - i)
    }

    type(char: string): void {
        const selection = this.editor.getSelection(true)

        this.editor.deleteText(selection.index, selection.length)
        this.editor.insertText(selection.index, char)
    }

    getText(): string {
        // getText returns additional newline at the end so slice it out
        return this.editor.getText().slice(0, -1)
    }

    setText(text: string): void {
        this.editor.insertText(0, text)
    }

    @HostListener('keydown', ['$event'])
    onKeyPress(event: KeyboardEvent) {
        this.editorService.onKeyDown.emit(event)
    }
}
