import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];

  date=new Date();
  sort(){
    this.employees.sort((a:any,b:any)=>a.package-b.package);
  }

  delete(index:number){
    this.employees.splice(index,1);
  }

  roleFilter:string='';
  filter(){
    this.employees=this.employees.filter((employee:any)=>employee.role==this.roleFilter);
  }

  name:string='';

  nameFilter(){
    // alert(this.name);
    this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.name)); 
  }

  bonus(){
    this.employees=this.employees.map((employee:any)=>{
      employee.package=employee.package+30000;
      return employee;
    });
  }

  // totalCost:number=0;
  costToCompany(){
    var totalCost=this.employees.reduce((sum:any,employee:any)=>sum+employee.package,0);
    alert(totalCost);
  }

  empName:string='';
  experience:number=0;
  package:number=0;
  role:string='';
  addRecord(){
    // console.log(this.name,this.experience,this.package,this.role);
    var user={
      name:this.empName,
      experience:this.experience,
      package: this.package,
      role: this.role
    }
    this.employees.unshift(user);
  }
}
