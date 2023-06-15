import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  // view-all api
  viewAllDoctors(){
// const body={
//   doctorName:'',
//   department:'',
//   qualification:'',
//   designation:'',
//   image:'',
//   cosulting_hours:
// }
 return this.http.get('http://localhost:3000/view-all')



}
}
