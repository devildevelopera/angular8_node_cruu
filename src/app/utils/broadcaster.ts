import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
interface castEvent {
    key: any;
    data: any;
}
export class Broadcaster { 
    private _eventBus: Subject<castEvent>;
    constructor() {
        this._eventBus = new Subject<castEvent>();
    }
    public emit(key: any, data: any): any {
        this._eventBus.next({key, data});
    }
    public listen(key:any): any {
        return this._eventBus.asObservable().pipe(
            filter(event => event.key === key),
            map(event => event)
        );
    }
}