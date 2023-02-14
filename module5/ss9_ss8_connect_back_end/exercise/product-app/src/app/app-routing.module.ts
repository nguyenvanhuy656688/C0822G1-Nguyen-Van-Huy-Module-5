import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCreateComponent} from "./component/product-create/product-create.component";
import {ProductListComponent} from "./component/product-list/product-list.component";


const routes: Routes = [
  {path:"create",component:ProductCreateComponent},
  {path:"",component:ProductListComponent},
  {path:"edit/:id",component:ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
