import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

department:string[]=['electrical','civil','computer','mechanical'];
student:any={
  electrical:[{name:'abhishek shukla',email:'as@gmail.com',phoneno:9923561356}],
  civil:[{name:'vedant joshi',email:'vj@gmail.com',phoneno:9923561323}],
  computer:[{name:'sagar shinde',email:'ss@gmail.com',phoneno:9923561359}],
  mechanical:[{name:'sushant yadav',email:'sy@gmail.com',phoneno:9923561351}]
}
name:any;
email:any;
phoneno:any
departmentn:any='electrical'
selectDep(dep:any){
this.departmentn=dep;
this.student[this.departmentn]
}
submitc(item:any){
  this.student[this.departmentn].push(item.value);
  item.reset()
}
}