import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements AfterViewInit {
  concatArray:any = [];

  constructor(public appService:AppService) { }

  ngAfterViewInit(){
    this.appService.higherOrderObservableWithConcat
      .subscribe((value: number) => this.concatArray.push(value));
  }

}
