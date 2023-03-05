import {Component} from '@angular/core';
import {PeopleService} from "../../service/people.service";
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PersonModel} from "../../model/PersonModel";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent {

  people$: Observable<PersonModel[]> | null = null;

  constructor(
    private _peopleService: PeopleService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refreshPeople();
    this.people$?.subscribe(a => console.log(a))
  }

  refreshPeople() {
    this.people$ = this._peopleService.fetchPeople()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  // refreshPeople() {
  //   this._peopleService.fetchPeople().subscribe(
  //     (people) => {
  //       console.log(people)
  //     });
  // }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(person: PersonModel) {
    this.router.navigate(['edit', person._id], {relativeTo: this.route});
  }

  // onRemove(person: PersonModel) {
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     data: 'Tem certeza que deseja remover essa pessoa?',
  //   });
  //
  //
  //   dialogRef.afterClosed().subscribe((result: boolean) => {
  //     if (result) {
  //       this._peopleService.remove(person._id).subscribe(
  //         () => {
  //           this.refreshPeople();
  //           this.snackBar.open('Pessoa removida com sucesso!', 'X', {
  //             duration: 5000,
  //             verticalPosition: 'top',
  //             horizontalPosition: 'center'
  //           });
  //         },
  //         () => this.onError('Erro ao tentar remover ' + person.name)
  //       );
  //     }
  //   });
  // }


}
