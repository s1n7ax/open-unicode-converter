import {NgModule} from '@angular/core';
import {MatSlideToggleModule, MatToolbarModule} from '@angular/material';


const MaterialComponents = [
    MatToolbarModule,
    MatSlideToggleModule
];

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
