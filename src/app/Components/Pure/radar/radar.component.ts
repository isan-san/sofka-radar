import { Component, Input } from '@angular/core';
import { Radar, defaultRadar } from 'src/app/Models/Radar';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent {
  @Input() radar:Radar = defaultRadar;
  panelOpenState = false;
}
