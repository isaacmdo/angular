import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ivonaldo',
        lastName: 'Soares',
        age: 26
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 42
      },
      {
        firstName: 'Marcio',
        lastName: 'Santos',
        age: 32
      },
      {
        firstName: 'Isaac',
        lastName: 'Moura',
        age: 22
      }
    ]

    return of(peopleArray)
  }
}
