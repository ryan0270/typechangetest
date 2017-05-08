import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LatencyComponent }  from './logic/latency.component';

const routes: Routes = [
	{ path: 'latency', component: LatencyComponent},
	{ path: '**', redirectTo: 'latency'},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
