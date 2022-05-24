import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() photo: Data;
  @Output() ClickPhotoEvent = new EventEmitter<string>();
  
  constructor() {  }

   ClickPhoto(name: string) {
    this.ClickPhotoEvent.emit(name);
  }
}



