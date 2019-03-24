import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title: string;
    @Input() converting: boolean;
    @Output() switchChange = new EventEmitter();

    constructor() {
        this.title = 'Sinhala Unicode Converter';
    }

    ngOnInit() {
    }
}
