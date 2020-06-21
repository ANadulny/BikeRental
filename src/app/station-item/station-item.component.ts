import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../manage-stations-page/station';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {

  @Input() station: Station;
  @Input() includeLatLng: boolean = false;
  isExpanded: boolean
  expandButtonText: string;

  constructor() { }

  ngOnInit() {
    this.isExpanded = false;
    this.expandButtonText = "Expand station";
  }

  removeStation() {
    //TODO - connect to backend
    // the corresponding station should be marked as deleted
    console.log(`[TODO] Station of id ${this.station.stationId} is to be deleted now.`);
  }

  expandButtonBehavior() {
    if(!this.isExpanded)
      this.expandButtonText = "Collapse station";
    else
      this.expandButtonText = "Expand station";
  }
}
