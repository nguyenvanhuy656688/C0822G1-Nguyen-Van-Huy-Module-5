import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponentComponent } from './dictionary-word/dictionary-component.component';
import { DictionaryMeanComponent } from './dictionary-mean/dictionary-mean.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponentComponent,
    DictionaryMeanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
