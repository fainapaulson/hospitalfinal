import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
constructor(private ds:DataService){}

ngOnInit(): void {
  
    this.ds.viewAllDoctors().subscribe((result:any)=>{
      console.log(result);
      
    })
  
  }
 
  }



