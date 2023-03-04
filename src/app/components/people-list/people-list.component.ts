import { Component, EventEmitter, Output, Input } from '@angular/core';
import {PersonModel} from "../../model/PersonModel";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {

  @Input() people: PersonModel[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() removeAll = new EventEmitter(false);

  readonly displayedColumns = ['name', 'birthDate', 'addresses', 'actions'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(person: PersonModel) {
    this.edit.emit(person);
  }

  onDelete(person: PersonModel) {
    this.remove.emit(person);
  }

  onDeleteAll() {
    this.remove.emit(true);
  }
}
