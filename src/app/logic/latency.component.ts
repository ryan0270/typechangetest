import {Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import {DateRangePickerComponent} from './daterangepicker.component';

@Component({
	selector: 'latency',
	templateUrl: '../templates/latency.component.html',
	styleUrls: ['../templates/latency.component.css']
})
export class LatencyComponent {
	statusEnum = ImageStatus;
	images: string[];
	latencyImages: LatencyImage[] = [
		new LatencyImage('image', 'image'),
	];
	status_: string;
	start_ts: Date = new Date();

	constructor() {}

	update(index: number): void {
		console.log('start: ' + this.start_ts);
		if (!isFinite(index) || index < 0 || index >= this.latencyImages.length) {
			console.warn('Invalid index: ' + index);
			return;
		}

		const img = this.latencyImages[index];

		if (!img.checked || img.status_ == ImageStatus.LoadingSuccessful) {
			return;
		}

		img.status_ = ImageStatus.Loading;
		let end_ts = new Date();
		let start_ts = new Date(end_ts.getTime() - 24*3600*1000);
	}
}

enum ImageStatus {
	None,
	Loading,
	LoadingSuccessful,
	LoadingFailed
}

class LatencyImage {
	name: string;
	checked: boolean;
	type: string;
	status_: ImageStatus;
	data: string;

	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
		this.status_ = ImageStatus.None;
		this.checked = false;
	}
}
