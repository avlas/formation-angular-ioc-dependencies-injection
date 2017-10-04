import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationService } from './services/FormationService';

@NgModule({
  declarations: [
    AppComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
