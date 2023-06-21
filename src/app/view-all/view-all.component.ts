import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
searchData:any
  allProductArray:any
constructor(private ds:DataService,private rout:Router){}

ngOnInit(): void {
  
      this.ds.viewAllDoctors().subscribe((result:any)=>{
        this.allProductArray=result
        console.log(this.allProductArray);
    })
    
   
  }
  search(event:any){
    this.searchData= event.target.value
   }




  }



