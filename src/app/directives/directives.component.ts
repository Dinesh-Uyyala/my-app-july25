import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isMorning:boolean=true;

  state:string='Telangana';
  states:string[]=['Andhra Pradesh','Telangana','Kerala','Karnataka','Tamilnadu','Delhi'];
  prices:number[]=[10,76,45,87,43,898];

  products:string[]=['Fruits','Vegetables','Electronics','Mobiles'];

}
