import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
