import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '../Data/Data';


@Component({
  selector: 'app-photo-strip',
  templateUrl: './photo-strip.component.html',
  styleUrls: ['./photo-strip.component.css']
})
export class PhotoStripComponent implements OnInit {

  @Input() listPhotos: Data[];
  @Output() SelectedPhotoEvent = new EventEmitter<string>();
  right = "right";
  left = "left";

  constructor() { }

  ngOnInit(): void {
  }

  SelectedPhoto(name: string) { 
    this.SelectedPhotoEvent.emit(name);
  }

  scroll(side: string){
    let stripPhotos = document.getElementById('stripPhotos');
    if(stripPhotos != null) {
      if(side === "left") {
        stripPhotos.scrollLeft -= 300;
      }
      else if(side === "right") {
        stripPhotos.scrollLeft += 300;
      }
    }
  }
}
