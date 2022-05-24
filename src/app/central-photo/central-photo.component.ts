import { Component, Input } from '@angular/core';
import { Data } from '../Data/Data';


@Component({
  selector: 'app-central-photo',
  templateUrl: './central-photo.component.html',
  styleUrls: ['./central-photo.component.css']
})
export class CentralPhotoComponent {

  @Input() photo: Data;
  name = "שם ענף :";
  description = "תיאור :";

  constructor() { }

}
