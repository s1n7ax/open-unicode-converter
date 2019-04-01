import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpComponent} from './help.component';
import {MaterialModule} from '../material/material.module';

describe('HelpComponent', () => {
    let component: HelpComponent;
    let fixture: ComponentFixture<HelpComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HelpComponent],
            imports: [MaterialModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HelpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
