import { Component, HostListener, OnInit, ViewChild } from '@angular/core'
import { EditorService } from './editor/editor.service'
import Converter from './core/converter'
import SinglishConverterBuilder from './core/converters/singlish/singlish-converter-builder'
import { EditorComponent } from './editor/editor.component'
import { MatSnackBar } from '@angular/material'
import config from '../../app.config.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(EditorComponent, null) editorComponent: EditorComponent
    public converting: boolean
    private converter: Converter
    private saveDelayTimeoutId: ReturnType<typeof setTimeout>
    private saveDelayTimeout: number = config.editor.saveDelay

    constructor(
        private editorService: EditorService,
        public snackBar: MatSnackBar
    ) {
        this.converting = true
        this.converter = new SinglishConverterBuilder().get()
    }

    ngOnInit(): void {
        this.editorService.onKeyPress.subscribe(this.convert.bind(this))
    }

    ngAfterViewInit(): void {
        const prevText = localStorage.getItem('text')

        if (prevText) {
            this.editorComponent.setText(prevText)
        }
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        // toggle the converter on and off
        if (event.ctrlKey && event.code === 'Space') {
            event.preventDefault()
            this.converting = !this.converting
        }

        clearTimeout(this.saveDelayTimeoutId)

        this.saveDelayTimeoutId = setTimeout(() => {
            const text = this.editorComponent.getText()

            localStorage.setItem('text', text)

            if (config.notification.showSaveNotification) {
                this.snackBar.open('Saved', null, {
                    duration: config.notification.notificationTimeout,
                    horizontalPosition: 'right',
                })
            }
        }, this.saveDelayTimeout)
    }

    convert(event: KeyboardEvent): void {
        if (!this.converting) return

        event.preventDefault()
        const currentWord = this.editorComponent.getCurrentWord()
        const rule = this.converter.convert(event.key, currentWord)

        this.editorComponent.backspace(rule.remove)
        this.editorComponent.type(rule.result)
    }
}
