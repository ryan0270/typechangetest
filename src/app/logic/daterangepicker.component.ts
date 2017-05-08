import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import {DatePickerComponent} from './datepicker.component';

import * as moment from 'moment-timezone';

@Component({
	selector: 'qnet-daterangepicker',
	template: `
		<label>
			start time:
			<qnet-datepicker #startDate [date]="startDate" (dateChange)="updateStart(startDate.date, startTime.value)"></qnet-datepicker>
			<input type="time" #startTime [value]="startTime" (change)="updateStart(startDate.date, startTime.value)" title="Enter time as HH:MM" >
		</label> <br>
		<label>
			end time:
			<qnet-datepicker [(ngModel)]="endDate" name="endDate" ></qnet-datepicker>
			<input type="time" [(ngModel)]="endTime" name="endTime" title="Enter time as HH:MM" >
		</label>
		`

})
export class DateRangePickerComponent {
	@Input() 
	set start(start: Date) {
		this.startDate = start;
		this.startTime = moment(start).format('HH:mm');
		console.log('start time set to: ' + this.startTime);
	}

	@Input() end: Date;
	@Output() startChange: EventEmitter<Date> = new EventEmitter();
	@Output() endChange: EventEmitter<Date> = new EventEmitter();

	_start: Date;
	startDate: Date;
	startTime: string;
	endDate: Date;
	endTime: string

	updateStart(startDate: Date, startTime: string): void {
		// Get a properly formatted ISO time string
		let startStr = moment(startDate).format('YYYY-MM-DD') + 'T' + startTime;
		startStr += '+00:00'; // for UTC time

		// Update the time and alert listeners
		this.start = new Date(startStr);
		this.startChange.emit(this.start)
	}
}
