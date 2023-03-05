import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../service/people.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {AddressModel, PersonModel} from "../../model/PersonModel";
import {FormArray, NonNullableFormBuilder, Validators} from "@angular/forms";
import {pipe} from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    name: ['', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]],
    birthDate: ['', [Validators.required]],
    addresses: this.formBuilder.array<AddressModel>([])
  });

  constructor(
    private _service: PeopleService,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder
  ) {
  }


  ngOnInit(): void {
    const people: PersonModel = this._route.snapshot.data['people'];
    this.form.patchValue({
      _id: people._id,
      name: people.name,
      birthDate: people.birthDate,
    });

    // Clear the FormArray before adding new controls
    const addressesFormArray = this.form.get('addresses') as FormArray;
    addressesFormArray.clear();

    // Iterate over the addresses and add each one to the FormArray
    if (people.addresses) {
      people.addresses.forEach((address: AddressModel) => {
        const addressFormGroup = this.formBuilder.group({
          street: [address.logradouro],
          city: [address.localidade],
          state: [address.uf],
          zip: [address.cep],
          neighborhood: [address.bairro],
          number: [address.number],
          mainAddress: [address.mainAddress]
        });
        addressesFormArray.push(addressFormGroup);
      });
    }
  }


  private onSuccess() {
    this._snackBar.open('Curso salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso.', '', {duration: 5000});
  }

  onCancel() {
    this._location.back();
  }

  onSubmit(): void {
    this._service.savePerson(this.form.value)
      .subscribe(
        pipe(
          result => this.onSuccess(),
          error => this.onError()
        )
      );
    console.log(this.form.value.birthDate);
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field?.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field?.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
