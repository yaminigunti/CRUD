import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpFormComponent } from './emp-list/emp-list.component';

const routes: Routes = [
   {path:'',component:EmpListComponent,pathMatch:'full'},
   {path:'addEmp',component:EmpFormComponent},
   {path:'editEmp/:id',component:EmpFormComponent}
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
