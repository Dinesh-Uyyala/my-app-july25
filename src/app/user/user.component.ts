import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../store/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  count:Observable<number>;
constructor(private _store:Store<CounterState>){
  this.count=_store.pipe(select('count'));
}
}
