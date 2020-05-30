import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from "./stats/stats.component";
import { MainComponent } from "./main/main.component";
import { AddRationKitComponent } from "./add-ration-kit/add-ration-kit.component";

const routes: Routes = [
  {path: 'stats',component : StatsComponent},
  {path:'',component:MainComponent},
  {path:'addRationKit/:idType/:identification', component:AddRationKitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
