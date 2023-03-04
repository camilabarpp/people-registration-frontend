import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonModel} from "../model/PersonModel";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly API = 'assets/people.json';
 // private readonly API = 'http://localhost:8080/v1/person/';

  constructor(private _httpClient: HttpClient) {
  }

  fetchPeople() {
    return this._httpClient.get<PersonModel[]>(this.API)
      .pipe(
        first(),
      );
  }


}
