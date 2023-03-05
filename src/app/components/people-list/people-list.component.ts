import {Component, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import {PersonModel} from "../../model/PersonModel";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnChanges {
  @Input() people: PersonModel[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() removeAll = new EventEmitter(false);

  displayedColumns = ['name', 'birthDate', 'addresses', 'actions'];
  isDesktopScreen: boolean = false;
  isTabletScreen: boolean = false;

  ngOnChanges(): void {
    this.detectScreenSize();
    window.addEventListener('resize', () => {
      this.detectScreenSize();
    });
  }

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

  detectScreenSize() {
    if (window.innerWidth <= 1205 && window.innerWidth >= 640) {
      this.displayedColumns = ['name', 'birthDate', 'actions'];
      this.isDesktopScreen = true;
      this.isTabletScreen = false;
    } else if (window.innerWidth <= 640) {
      this.displayedColumns = ['name', 'actions'];
      this.isDesktopScreen = false;
      this.isTabletScreen = true;
    } else {
      this.displayedColumns = ['name', 'birthDate', 'addresses', 'actions'];
      this.isDesktopScreen = true;
      this.isTabletScreen = false;
    }
  }

}
