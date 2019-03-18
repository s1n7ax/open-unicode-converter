import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditorComponent} from './editor.component';
import Quill from 'quill';
import {DebugElement} from '@angular/core';

describe('EditorComponent', () => {
    let component: EditorComponent;
    let fixture: ComponentFixture<EditorComponent>;
    let editor: Quill;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;
    const type = (chars: string) => {
        for (const char of chars) {
            component.type(char);
        }
    };


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditorComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        debugElement = fixture.debugElement;
        nativeElement = debugElement.nativeElement;
    });

    beforeEach(() => {
        editor = (component as any).editor as Quill;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Type', () => {
        it('should type values', () => {
            type('Hello World');
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hello World');
        });

        it('should type value when the cursor point is changed', () => {
            editor.setText('Hello World');
            editor.setSelection(5, 0);
            type(' Testing');
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hello Testing World');

            editor.setSelection(0, 0);
            type('Init ');
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Init Hello Testing World');
        });

        it('should remove and type value when a text is selected', () => {
            editor.setText('Hello World', 'user');
            editor.setSelection(6, 6);
            type('Srinesh');
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hello Srinesh');
        });
    });

    describe('Backspace', () => {
        it('should backspace char', () => {
            editor.setText('Hello World', 'user');
            editor.setSelection(editor.getLength(), 0);
            component.backspace(1);
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hello Worl');
        });

        it('should backspace given number of chars', () => {
            editor.setText('Hello World', 'user');
            editor.setSelection(editor.getLength(), 0);
            component.backspace(6);
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hello');
        });

        it('should backspace char when cursor position is changed', () => {
            editor.setText('Hello World');
            editor.setSelection(5, 0);
            component.backspace(1);
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('Hell World');
        });

        it('should backspace multiple chars when cursor position is changed', () => {
            editor.setText('Hello World');
            editor.setSelection(5, 0);
            component.backspace(3);
            expect(nativeElement.querySelector('.ql-editor > p').innerHTML).toBe('He World');
        });
    });

    describe('Current Word', () => {
        it('should get the current word', () => {
            editor.setText('Hello World');
            editor.setSelection(editor.getLength(), 0);
            expect(component.getCurrentWord()).toBe('World');
        });

        it('should get the current word when cursor position is changed', () => {
            editor.setText('Hello World');
            editor.setSelection(9, 0);
            expect(component.getCurrentWord()).toBe('Wor');

            editor.setSelection(3, 0);
            expect(component.getCurrentWord()).toBe('Hel');

            editor.setSelection(1, 0);
            expect(component.getCurrentWord()).toBe('H');
        });

        it('should get null when no current word present', () => {
            editor.setText('Hello World ');
            editor.setSelection(editor.getLength(), 0);
            expect(component.getCurrentWord()).toBe('');

            editor.setSelection(0, 0);
            expect(component.getCurrentWord()).toBe('');

            editor.setSelection(6, 0);
            expect(component.getCurrentWord()).toBe('');
        });
    });
});
