import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}
  ngOnInit(): void {
  }
// modal form
addForm=this.fb.group({
  doctorName:[''],
department:[''],
qualification:[''],
designation:[''],
imageUrl:[''],
cosulting_hours:['']

})
addDoctor(){
  let path=this.addForm.value
  this.ds.addNewDoctor(
    path.doctorName,
    path.department,
path.qualification,
path.designation,path.imageUrl,
path.cosulting_hours
  )
  .subscribe((data:any)=>{
    console.log(data);
    
    // alert('new doctor added')
    this.router.navigateByUrl('view-all')
  })
}

}
