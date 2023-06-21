import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view-all',component:ViewAllComponent},
  {path:'view-all/:doctorName',component:ViewComponent},
{path:'view-all/:doctorName/booking',component:RegisterComponent},
{path:'view-all/:doctorName/booking/add',component:AddComponent },
{path:'view-all/:doctorName/booking/show',component:ShowComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
