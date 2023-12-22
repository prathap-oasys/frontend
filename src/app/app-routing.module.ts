import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { FormComponent } from './form/form.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { DeleteOneComponent } from './delete-one/delete-one.component';
import { UpdateOneComponent } from './update-one/update-one.component';

const routes: Routes = [
  {path:"",component:GetAllComponent},
  {path:"post",component:FormComponent},
  {path:"getById/:id",component:GetByIdComponent},
  {path:"delete/:id",component:DeleteOneComponent},
  {path:"update/:id",component:UpdateOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
