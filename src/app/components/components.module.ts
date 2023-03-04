import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleListComponent} from "./people-list/people-list.component";
import {PeopleFormComponent} from "./people-form/people-form.component";
import {PeopleTableComponent} from "./people-table/people-table.component";
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import {ComponentsRoutingModule} from "./components.routing.module";


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleFormComponent,
    PeopleTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule {
}
