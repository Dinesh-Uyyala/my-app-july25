import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { appleMail } from '../validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html', 
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
public userForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,
    Validators.minLength(6),Validators.maxLength(20),
    appleMail]),
    
  password:new FormControl(),
  mobile:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  type:new FormControl(),
  // busFee:new FormControl(),
  // hostelFee:new FormControl()
  cards:new FormArray([])
})

get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

addCard(){
  this.cardsFormArray.push(
    new FormGroup({
      cardNumber:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl(),
    })
  )
}

delete(index:any){
  this.cardsFormArray.removeAt(index);
}

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='residential'){
        this.userForm.addControl('hostelFee',new FormControl);
        this.userForm.removeControl('busFee');
      }else{
        this.userForm.addControl('busFee',new FormControl);
        this.userForm.removeControl('hostelFee');
      }
    }
  )
}

submit(){
  console.log(this.userForm);
}
}
