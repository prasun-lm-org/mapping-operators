import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements AfterViewInit {
 switchArray:any = [];

  constructor(public appService:AppService) { }

  ngAfterViewInit(){
    this.appService.higherOrderObservableWithSwitch
      .subscribe((value: number) => this.switchArray.push(value));
  }

}
