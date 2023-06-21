import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

  allArray:any
  constructor(private ds:DataService,private rout:Router){}
  ngOnInit(): void {

    this.ds.viewAllPatients().subscribe((result:any)=>{
      this.allArray=result
      console.log(this.allArray);
  })

  }

}
