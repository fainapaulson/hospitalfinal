import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private fb:FormBuilder,private ds:DataService,private router:Router,private rout:Router){}
  ngOnInit(): void {
               


  }

    // model form
    registerForm=this.fb.group({
   
patientName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mobile:['',[Validators.required,Validators.pattern('[0-9]+')]],
   email:[''],
   
   department:[''],
   doctor:[''],
   date:['']
    })

    register(){

    

     if(this.registerForm.valid){
        this.ds.registerApi(
          this.registerForm.value.patientName,
          this.registerForm.value.mobile,
          this.registerForm.value. email,
          this.registerForm.value. department,
          this.registerForm.value.  doctor,
          this.registerForm.value. date

        ).subscribe((result:any)=>{
          alert(result.message)
          this.router.navigateByUrl("")
        },
        result=>{
          alert(result.error.message)
        }
        )
      }
      
    
    else{
      alert("invalid form")
    }
    }

  add(){
    this.rout.navigateByUrl('view-all/:doctorName/booking/add')
  }
  show(){
    this.rout.navigateByUrl('view-all/:doctorName/booking/show')
  }

  }





