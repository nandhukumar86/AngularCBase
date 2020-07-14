import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoBlankSpaceDirective } from './no-blank-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    NoBlankSpaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
