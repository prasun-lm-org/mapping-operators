import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';

const routes: Routes = [
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'exhaust-map', component: ExhaustMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
