import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { EditorService } from "./editor/editor.service";
import Converter from "./core/converter";
import SinglishConverterBuilder from "./core/converters/singlish/singlish-converter-builder";
import { EditorComponent } from "./editor/editor.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    @ViewChild(EditorComponent, null) editorComponent: EditorComponent;
    public converting: boolean;
    private converter: Converter;
    private typeBlurTimeoutId: ReturnType<typeof setTimeout>;
    private typeBlurTimeout: number = 2000;

    constructor(private editorService: EditorService) {
        this.converting = true;
        this.converter = new SinglishConverterBuilder().get();
    }

    ngOnInit(): void {
        this.editorService.onKeyPress.subscribe(this.convert.bind(this));
    }

    ngAfterViewInit(): void {
        const prevText = localStorage.getItem("text");

        if (prevText) {
            this.editorComponent.setText(prevText);
        }
    }

    @HostListener("keydown", ["$event"])
    switch(event: KeyboardEvent) {
        if (event.ctrlKey && event.code === "Space") {
            event.preventDefault();
            this.converting = !this.converting;
        }

        clearTimeout(this.typeBlurTimeoutId);

        this.typeBlurTimeoutId = setTimeout(() => {
            const text = this.editorComponent.getText();
            localStorage.setItem("text", text);
        }, this.typeBlurTimeout);
    }

    convert(event: KeyboardEvent): void {
        if (!this.converting) {
            return;
        }

        event.preventDefault();
        const currentWord = this.editorComponent.getCurrentWord();
        const rule = this.converter.convert(event.key, currentWord);

        this.editorComponent.backspace(rule.remove);
        this.editorComponent.type(rule.result);
    }
}
