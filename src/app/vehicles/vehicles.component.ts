import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
vehicles:any[]=[];
  constructor(private _vehiclesService:VehiclesService){
    this.loadVehicles();
  }
loadVehicles(){
   this._vehiclesService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
        console.log("vehicles data:",this.vehicles);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
}
delete(id:any){
    if(confirm("Are you sure to delete?")==true){
      this._vehiclesService.deleteVehicle(id)
      .subscribe(
        (data:any)=>{
          alert("Record deleted successfully")
        },(err:any)=>{
          alert("Internal Server Error!")
        }
      )
      
      this.loadVehicles();
    }else{
      alert("you have cancelled the delete")
    }
  }

  searchKeyword:string='';
  search(){
    // alert(this.term)
    this._vehiclesService.getFilteredVehicles(this.searchKeyword)
      .subscribe((data:any)=>{
        console.log(data); 
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!") 
      }
    )
  }


  columnName:string='';
  sortOrder:string='';
  sort(){
    // alert(this.columnName+this.sortOrder)
    this._vehiclesService.
      getSortedVehicles(this.columnName,this.sortOrder)
      .subscribe((data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }


  items:number=0;
  pageNumber:number=0;
  pagination(){
    this._vehiclesService.
      getPaginatedVehicles(this.items,this.pageNumber)
      .subscribe(
        (data:any)=>{
          console.log(data);
          this.vehicles=data;
        },(err:any)=>{
          alert("Internal Server Error!")
        }
      ) 
  }


}
