import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material";
import { EditorComponent } from "./editor/editor.component";
import { FooterComponent } from "./footer/footer.component";
import { EditorService } from "./editor/editor.service";
import { HelpComponent, HelpSheetComponent } from "./help/help.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorComponent,
    FooterComponent,
    HelpComponent,
    HelpSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [HelpSheetComponent],
  providers: [EditorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
