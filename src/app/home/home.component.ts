import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { select, Store } from '@ngrx/store';
import { CounterState } from '../store/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../store/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// count:number=0;
count:Observable<number>;
constructor(private _store:Store<CounterState>){
  this.count=_store.pipe(select('count'));
}
increment(){
  this._store.dispatch(increment());
}
decrement(){
  this._store.dispatch(decrement());
}
}
