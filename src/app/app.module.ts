import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

import { AlbumsComponent } from './albums/albums.component'
import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [AppComponent, AlbumsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
