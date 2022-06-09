import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

	timer = 0;
	interval: any;
	actionArray: any = [];
	pauseArray: any = [];
	pauseCount = 0;
	startCount = 0;
	constructor() { }

	ngOnInit(): void {
		console.log(new Date())
	}

	handleStartChange(value: number) {
		if (value && value > 0) {
			this.timer = value;
			const timeObj = { type: 'start', time: new Date(), value: this.timer }
			this.actionArray.push(timeObj);
			this.setActionCount('start');
			this.interval = setInterval(() => {
				if (this.timer > 0) {
					this.timer--;
				}
			}, 1000);
		} else if (value === 0 && this.timer > 0) {
			const timeObj = { type: 'start', time: new Date(), value: this.timer }
			this.actionArray.push(timeObj);
			this.setActionCount('start');
			this.interval = setInterval(() => {
				if (this.timer > 0) {
					this.timer--;
				}
			}, 1000);
		}
	}

	handlePauseChange(value: number) {
		const timeObj = { type: 'pause', time: new Date(), value: this.timer }
		this.actionArray.push(timeObj);
		this.setActionCount('pause');
		clearInterval(this.interval);
	}

	handleResetChange(value: boolean) {
		clearInterval(this.interval);
		this.timer = 0
		this.actionArray.length = 0;
		this.pauseArray.length = 0;
		this.startCount = 0;
		this.pauseCount = 0;
	}

	setActionCount(action: string) {
		if (action === 'start') {
			const startArray = (this.actionArray.filter((actionObj: any) => {
				return actionObj.type === 'start';
			}));
			this.startCount = startArray.length;
		} else if (action === 'pause') {
			const pauseArray = (this.actionArray.filter((actionObj: any) => {
				return actionObj.type === 'pause';
			}));
			this.pauseCount = pauseArray.length;
			this.pauseArray = pauseArray;
		}
	}

}
