import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoStripComponent } from './photo-strip/photo-strip.component';
import { CentralPhotoComponent } from './central-photo/central-photo.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoStripComponent,
    CentralPhotoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
