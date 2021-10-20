import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/component/list-people/list-people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 1;
  nome = 'Isaac Moura de Oliveira'
  text = '';

  pessoasTest = [
    {
      firstName: 'Ivonaldo',
      sobrlastNameenome: 'Soares',
      age: 26
    },
    {
      firstName: 'Maria',
      lastName: 'Silva',
      age: 28
    },
    {
      firstName: 'Joao',
      lastName: 'Pereira',
      age: 32
    },
    {
      firstName: 'Marcio',
      lastName: 'Santos',
      age: 40
    },
  ]

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    console.log(this.pessoasTest)
    let interval = setInterval(() => {
      this.count = this.count + 1
      if(this.count === 10 ) {
        clearInterval(interval)
      }
    }, 1000)
    this.getPeople();
  }

  clicou(nome: string) {
    console.log(nome, 'clicou')
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoasTest = people;
    })
  }
}
