import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "../../component/product-list/product-list.component";
import {ProductCreateComponent} from "../../component/product-create/product-create.component";


const routes: Routes = [
  {path:"",component:ProductListComponent,children: [
      {path:"create",component:ProductCreateComponent},
      {path:"edit/:id",component:ProductCreateComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
