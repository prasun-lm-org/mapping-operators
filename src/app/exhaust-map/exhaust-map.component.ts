import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements AfterViewInit {
  exhaustArray:any = [];

  constructor(public appService:AppService) { }
  
  ngAfterViewInit(){
    this.appService.higherOrderObservableWithExhaust
      .subscribe((value: number) => this.exhaustArray.push(value));
  }

}
