import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements AfterViewInit {
  mergeArray:any = [];

  constructor(public appService:AppService) { }

  ngAfterViewInit(){
    this.appService.higherOrderObservableWithMerge
      .subscribe((value: number) => this.mergeArray.push(value));
  }

}
