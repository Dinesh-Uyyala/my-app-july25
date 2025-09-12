import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CounterState } from '../store/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  count:Observable<number>;
constructor(private _store:Store<CounterState>){
  this.count=_store.pipe(select('count'));
}
}
