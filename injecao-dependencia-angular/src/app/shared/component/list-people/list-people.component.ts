import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  pessoasTest = [
    {
      firstName: 'Ivonaldo',
      lastName: 'Soares',
      age: 26
    }
  ]

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoasTest = people;
    })
  }
}
