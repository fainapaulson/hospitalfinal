import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewAllComponent } from '../view-all/view-all.component';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:any
pdata:any
  constructor(private ds:DataService,private ar:ActivatedRoute,private rout:Router ){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.doctorName
      console.log(this.id);

     } )

     this.ds. viewDoctor( this.id).subscribe((result:any)=>{
    
      this.pdata=result
      console.log(this.pdata);
      
    })
  

}
booking(){
  this.rout.navigateByUrl('view-all/this.pdata/booking');
  
}

}
