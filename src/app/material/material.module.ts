import {NgModule} from '@angular/core';
import {
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';


const MaterialComponents = [
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
];

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
