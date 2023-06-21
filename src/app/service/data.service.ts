import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewAllComponent } from '../view-all/view-all.component';
import { ViewComponent } from '../view/view.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  // view-all api
  viewAllDoctors(){
 return this.http.get('http://localhost:3000/viewall')
}
  // api to access single doctor data
  viewDoctor(doctorName:any){
    return this.http.get('http://localhost:3000/view-all/'+doctorName)

  }

  registerApi(patientName:any, mobile:any, email:any,department:any, doctor:any,date:any){
    const body={
      patientName,
      mobile,
      email,
      department,
      doctor,
      date
    }
    return this.http.post('http://localhost:3000/view-all/:doctorName/booking',body)
  }

// ADD NEW doctor
addNewDoctor(doctorName:any,department:any,qualification:any,designation:any,imageUrl:any,cosulting_hours:any){
  const body={
    doctorName,
    department,
    qualification,
    designation,
    imageUrl,
    cosulting_hours
  }

  return this.http.post('http://localhost:3000/view-all/',body)

}

viewAllPatients(){
  return this.http.get('http://localhost:3000/viewall/:doctorName/booking/show')
 }
 
}
