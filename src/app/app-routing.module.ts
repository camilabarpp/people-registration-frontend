import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsModule} from "./components/components.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'people' },
  {
    path: 'people',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
