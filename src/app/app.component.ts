import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

 
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
 
  OrderForm!:FormGroup 
  submitted=false 
  Orderform!: FormGroup;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'add1','add2','city','state','zipcode','phone','email','order','edit','delete'];
  dataSource = new MatTableDataSource<any>;
  data:any=[];

  datas={
  firstname:'',
  lastname: '',
  add1: '',
  add2: '',
  city: '', 
  zipcode: '', 
  phone: '',
  email: '', 
  state: '',
  order:'',
  id:''
  }
  isEdit!: boolean;
  
 constructor(private formBuilder: FormBuilder,
  private service:RestService,
  private router:Router){


 } 
 
 
 
 ngOnInit(): void { 



  this.Orderform = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    add1: ['', Validators.required],
    add2: ['', Validators.required],
    city: ['', Validators.required],
    zipcode: ['', [Validators.required,Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    state: ['', Validators.required],
    order:['',Validators.required.prototype]
});
 
  this.service.GetUsers().subscribe((res)=>
 {
  this.data =res;{
    this.dataSource=new MatTableDataSource<any>(this.data)
  
  }
 })
} 

get f() { return this.Orderform.controls; }


AddData(){
  
  this.service.postUsers(this.datas).subscribe
  ({next:(res)=>{
   
    alert("User Deatails Submitted successfully");
 
    window.location.reload();
  },
  error:()=>{
    alert("Error Submitting")
  }
  })

}
 
 

DeleteData(id:any){
 this.service.DeleteUsers(id).subscribe(
  (res)=>
 {
  console.log(res)
  window.location.reload();
 },
 (error:HttpErrorResponse)=>{
  console.log(error);
 });
 

}

  
EditData(element:any) 
  { 
    this.isEdit=true
    this.Orderform.controls['firstname']; 
    this.Orderform.controls['lastname']; 
    this.Orderform.controls['add1']; 
    this.Orderform.controls['add2']; 
    this.Orderform.controls['city']; 
    this.Orderform.controls['state']; 
    this.Orderform.controls['zipcode']; 
    this.Orderform.controls['phone'];
    this.Orderform.controls['email'];
    this.Orderform.controls['order'];   
    this.datas=element; 
      
  } 

  
  UpdateData(){
  
    this.service.EditUsers(this.datas).subscribe
    ({next:(res)=>{
     
      alert("User Deatails Updated successfully");
   
      
    },
    error:()=>{
      alert("Error Submitting")
    }
    });
  
  }
 


}