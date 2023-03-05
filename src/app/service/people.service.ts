import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonModel} from "../model/PersonModel";
import {first} from "rxjs/operators";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // private readonly API = 'assets/people.json';

  private readonly API = 'http://localhost:8080/v1/person/';

  constructor(private _httpClient: HttpClient) {
  }

  fetchPeople() {
    return this._httpClient.get<PersonModel[]>(this.API)
      .pipe(
        first(),
      );
  }

  getPersonById(id: string) {
    return this._httpClient.get<PersonModel>(`${this.API}/${id}`)
  }

  savePerson(record: Partial<PersonModel>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  create(record: Partial<PersonModel>) {
    return this._httpClient.post<PersonModel>(this.API, record)
      .pipe(
        first()
      );
  }

  update(record: Partial<PersonModel>) {
    return this._httpClient.put<PersonModel>(`${this.API}/${record._id}`, record)
      .pipe(
        first()
      );
  }

  removeById(id: string) {
    return this._httpClient.delete(`${this.API}/${id}`)
      .pipe(
        first()
      );
  }

  removeAll() {
    return this._httpClient.delete(this.API)
      .pipe(
        first()
      );
  }
}
