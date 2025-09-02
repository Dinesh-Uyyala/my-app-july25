import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
parent:number=0;
child:number=0;

catch(value:number){
  this.child=value;
}

userDetails:User={
  name:'Dinesh',
  mobile:9849808937,
  isIndian:true
}
}
