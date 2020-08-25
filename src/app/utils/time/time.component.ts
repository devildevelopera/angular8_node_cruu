import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'time',
	inputs: ['value', 'meridian', 'update_on_init'],
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
	public hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	public minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
	@Output() update = new EventEmitter();
	public show=false;
	public update_on_init:any;
	public value:any;
	public meridian:any = true;
	public time:any='';
    public maskTime = [/[0-9]/, /\d/,':',/\d/, /\d/,' ',/[ap]/,/[m]/];
    public placeholder = 'hh:mm am';
	constructor(){}
	public init:any;
	ngOnInit(){
		if(!this.meridian){
			this.maskTime = [/[0-9]/, /\d/,':',/\d/, /\d/];
			this.placeholder = 'hh:mm';
		}
		if(this.value && typeof this.value == 'object'){
			this.hour = this.value.hour || 0;
			if(this.hour > 12 && this.meridian){
				this.hour -= 12;
				this.kind = 'pm';
			}else{
				this.kind = 'am';
			}
			this.minute = this.value.minute || 0;
			this.set(true);
		}else if(this.value && typeof this.value == 'string'){
			this.value = this.value.toLowerCase().split(' ').join('').split(':');
			this.hour = Number(this.value[0]) || 0;
			this.minute = Number(this.value[1].slice(0, 2)) || 0;
			if(this.meridian){
				this.kind = this.value[1].slice(2, 4);
			}
			this.set(true);
		}
		if(this.update_on_init){
			setTimeout(()=>{
				this.save();
			}, 100);
		}
	}
	private _update:any;
	afterWhile(){
		let times = this.time.split(':');
		if(times.length){
			this.hour=Math.floor(times[0]);
			if(this.hour>12 && this.meridian) this.hour=12;
		}
		if(times.length>1 && times[1]){
			times = times[1].split(' ');
			if(times[0].length>1 && times.length>1 && times[1]){
				if(times[1] == 'a' || times[1] == 'am'){
					this.kind = 'am';
				}else{
					this.kind = 'pm';
				}
			}else{
				this.kind = null;
			}
			this.minute=Math.floor(times[0]);
		}else{
			this.minute = null;
			this.kind = null;
		}
		this.set();
		this._update = setTimeout(this.save.bind(this), 1000);
	}
	save(){
		if(!this.hour) this.hour=0;
		if(!this.minute) this.minute=0;
		if(!this.kind) this.kind='am';
		let update = {
			minute: this.minute,
			time: this.time,
			hour: this.hour,
			kind: this.kind,
			second: 0
		};
		if(this.kind=='pm'){
			update.hour+=12;
		}
		this.update.emit(update);
	}
	public kinds = ['am', 'pm'];
	public hour:any;
	public minute:any;
	public kind:any;
	set(force=false){
		if(force){
			if(!this.hour) this.hour=0;
			if(!this.minute) this.minute=0;
			if(!this.kind) this.kind='am';
		}
		this.time = '';
		if(typeof this.hour == 'number' && (this.hour>1||force) ){
			this.time += (this.hour<10&&'0'||'')+this.hour + ':';
		}else{
			return this.time += this.hour;
		}
		if(typeof this.minute == 'number' && (this.minute>9||this.kind||force)){
			this.time += (this.minute<10&&'0'||'')+this.minute;
		}else if(typeof this.minute == 'number'){
			return this.time += this.minute;
		}
		if(this.kind) this.time += ' ' + this.kind;
	}
}
