import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "main", children:[
      {
        path: "user-list", component: UserListComponent
      },
      {
        path: "", component: MainComponent
      }
    ]
  },
  {
    path: "", component: MainComponent
  },
  {
    path: "**", component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
