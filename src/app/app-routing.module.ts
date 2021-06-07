import { ListOwnersComponent } from './list-owners/list-owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { HomeComponent } from './components/home/home.component';

import { FormOwnerComponent } from './components/form-owner/owners-add.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'owners-add',
    component: FormOwnerComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: 'owners',
    component: ListOwnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
