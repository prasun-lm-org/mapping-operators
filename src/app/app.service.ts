import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs'; 
import { take, concatMap, mergeMap, switchMap, exhaustMap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  outerInterval: Observable<number> = 
    interval(2000).pipe(
      take(3)
  );

  innerInterval: Observable<number> = 
    interval(1000).pipe(
      take(4)
  );

  higherOrderObservableWithConcat: Observable<number> =
    this.outerInterval.pipe(
      concatMap(value => this.innerInterval)
  );

  higherOrderObservableWithMerge: Observable<number> =
    this.outerInterval.pipe(
      mergeMap(value => this.innerInterval)
  );

  higherOrderObservableWithSwitch: Observable<number> =
    this.outerInterval.pipe(
      switchMap(value => this.innerInterval)
  );

  higherOrderObservableWithExhaust: Observable<number> =
    this.outerInterval.pipe(
      exhaustMap(value => this.innerInterval)
  );

// OuterInterval:   ----0----0----0|
//                      |    |    | 
// innerInterval_1:     --0--1--2--3|
//                           |    |
// innerInterval_2:          --0--1--2--3|
//                                |
// innerInterval_3:               --0--1--2--3|
// vvvvvvvvvvvvvvvvv switchMap() vvvvvvvvvvvvvvv
//                  ------0----0----0--1--2--3|


// OuterInterval:   ----0----0|
//                      |    |    
// innerInterval_1:     --0--1--2|
//                           |    
// innerInterval_2:          --0--1--2|
// vvvvvvvvvvvvvvvvv switchMap() vvvvvvv
//                  ------0----0--1--2|

}
