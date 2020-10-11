import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from "./add-item/add-item.component";
import { FindItemComponent } from "./find-item/find-item.component";
import { GetBillComponent } from "./get-bill/get-bill.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { ShowMapComponent } from './show-map/show-map.component';
import { LogoutComponent } from "./logout/logout.component";
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'add-item',
    component:AddItemComponent
  },
  {
    path:'find-item',
    component:FindItemComponent
  },
  {
    path:'get-bill',
    component:GetBillComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'show-map',
    component:ShowMapComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path: 'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
