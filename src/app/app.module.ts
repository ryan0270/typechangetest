import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';

import { AppComponent }  from './logic/app.component';
import { AppRoutingModule }  from './app-routing.module';
import { LatencyComponent }  from './logic/latency.component';
import { DatePickerComponent }  from './logic/datepicker.component';
import { DateRangePickerComponent }  from './logic/daterangepicker.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		LatencyComponent,
		DatePickerComponent,
		DateRangePickerComponent,
	],
	providers: [
	],
	bootstrap:    [ AppComponent ],
})
export class AppModule { }
