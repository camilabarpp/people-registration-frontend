import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleTableComponent} from "./people-table/people-table.component";
import {PeopleFormComponent} from "./people-form/people-form.component";

const routes: Routes = [
  {path: '', component: PeopleTableComponent},
  {path: 'new', component: PeopleFormComponent},
  {path: 'edit/:id', component: PeopleFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
