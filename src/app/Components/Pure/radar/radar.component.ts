import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Radar, defaultRadar } from 'src/app/Models/Radar';
import { RadarService } from 'src/app/Services/radar-service.service';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit{

  constructor(
    private radarSerive: RadarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  radar:Radar = defaultRadar;
  panelOpenState = false;

  ngOnInit(): void {
    this.radarSerive.get(this.route.snapshot.paramMap.get('radarId') as string).subscribe((radar)=>{
      this.radar = radar;
    });
  }
}
