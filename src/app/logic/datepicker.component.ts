// based on the example from http://www.radzen.com/blog/jquery-plugins-and-angular/
import { forwardRef, ViewChild, Input, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy, Component} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import * as $ from "jquery"; // the proper way to do it
import 'jqueryui';

const DATE_PICKER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatePickerComponent),
	multi: true
};

@Component({
	selector: 'qnet-datepicker',
	template: `<input #input type="text">`,
	providers: [DATE_PICKER_VALUE_ACCESSOR]
})
export class DatePickerComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
	private onTouched = () => {};
	private onChange: (date: Date) => void = () => {};

	@Input() date: Date;
	@Input() options: any = {};
	@Output() dateChange = new EventEmitter();

	@ViewChild('input') input: ElementRef;

	constructor() {
		this.date = new Date();
	}

	writeValue(date: Date) {
//		if(!date) {
//			return;
//		}
//		this.date = date;
//		$(this.input.nativeElement).datepicker('setDate', this.date)
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	ngAfterViewInit() {
		console.log('I am a date: ' + (this.date instanceof Date))
		$(this.input.nativeElement).datepicker(Object.assign({}, this.options, {
			onSelect: (dateStr: string) => {
//				this.date = $(this.input.nativeElement).datepicker('getDate');
//				this.onChange(this.date);
				this.onTouched();
				this.dateChange.next(this.date);
			}
		}))
console.log('date is ' + this.date)
		$(this.input.nativeElement).datepicker('setDate', this.date)
	}

	ngOnDestroy() {
		$(this.input.nativeElement).datepicker('destroy');
	}
}
