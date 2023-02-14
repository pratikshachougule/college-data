import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent {
  constructor(){
    this.tempstaff=this.estaff[this.department]
  }
  'searchtext':string
  tempstaff:any;
  dList: string[] = ['electrical','civil','computer','mech'];
estaff:any={electrical:[{name:'pratiksha',school:'xyz',mail:'xyz@gmail.com',phoneno:1335656},
{name:'radha',school:'xyz',mail:'xyz@gmail.com',phoneno:1335656}
],
civil:[{name:'teju',school:'xyz',mail:'teju@gmail.com',phoneno:133576},
{name:'prajkta',school:'xyz',mail:'praj@gmail.com',phoneno:133656}
],
computer:[{name:'komal',school:'xyz',mail:'komal@gmail.com',phoneno:133656},
{name:'sharmila',school:'xyz',mail:'sharmila@gmail.com',phoneno:133656}
],
mech:[{name:'afreen',school:'xyz',mail:'afreen@gmail.com',phoneno:133656},
{name:'anjali',school:'xyz',mail:'anjali@gmail.com',phoneno:133656},
]
}
no:any;
name:any;
mail:any;
phoneno:any;
department:any='civil'
someMethod(abc:any){
 this.department=abc;
 this.tempstaff=this.estaff[this.department]
 this.searchtext=''
}

  visible:boolean = false

  onclick()
  {
    this.visible = !this.visible
  }
  user={name:'',mail:'',phoneno:''}
  addStaff(){
    const a=JSON.parse(JSON.stringify(this.user))
    this.estaff[this.department].push(a);
    this.user={name:'',mail:'',phoneno:''}
    }
    show:any=null
    inpbox(abc:any){
      this.show = abc
  }
  savedata(){
        this.show =null
  }
  deleteData(item:any){
    this.estaff[this.department].splice(item,1)
  } 
  staffLogin(item:any){
this.estaff[this.department].push(item.value);
item.reset()
  }
  logForm= new FormGroup({
    name:new FormControl('',[Validators.required]),
    mail:new FormControl('',[Validators.required,Validators.email]),
    subjects:new FormArray([])
  })
  login(logForm:any){
    this.estaff[this.department].push(this.logForm.value);
  }
  date = new Date();
  Price=100;
  searchintable(item:any){
    console.log
    (item.target.value)
    this.tempstaff=this.estaff[this.department].filter((data:any)=>data.name.toLowerCase().includes(item.target.value.toLowerCase()))
  }
}

