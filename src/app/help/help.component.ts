import {Component, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

    constructor(private bottomSheet: MatBottomSheet) {
    }

    openHelpSheet() {
        this.bottomSheet.open(HelpSheetComponent);
    }

    ngOnInit() {
    }

}

@Component({
    selector: 'app-help-sheet',
    templateUrl: './help.sheet.component.html',
    styleUrls: ['./help.sheet.component.scss']
})
export class HelpSheetComponent {
    displayedColumns: string[] = ['letter', 'keyBind'];
    dataSource = ELEMENT_DATA;

    constructor(private bottomSheetRef: MatBottomSheetRef<HelpSheetComponent>) {
    }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}

export interface PeriodicElement {
    letter: string;
    keyBinds: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {letter: 'a', keyBinds: 'a'}
];
