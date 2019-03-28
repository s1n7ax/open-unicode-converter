import {NgModule} from '@angular/core';
import {MatSlideToggleModule, MatToolbarModule, MatTooltipModule} from '@angular/material';


const MaterialComponents = [
    MatToolbarModule,
    MatSlideToggleModule,
    MatTooltipModule
];

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
