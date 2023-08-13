import {Component} from '@angular/core';
import {MapService} from "../../../services/map.service";

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.scss']
})
export class LandmarkComponent {

  constructor(private mapService: MapService,) {
    console.log("denemes")
  }

}
