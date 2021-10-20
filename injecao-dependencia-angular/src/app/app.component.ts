import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 1;
  nome = 'Isaac Moura de Oliveira'
  text = '';

  pessoas = [
    {
      nome: 'Ivonaldo',
      sobrenome: 'Soares',
      age: 26
    },
    {
      nome: 'Maria',
      sobrenome: 'Silva',
      age: 28
    },
    {
      nome: 'Joao',
      sobrenome: 'Pereira',
      age: 32
    },
    {
      nome: 'Marcio',
      sobrenome: 'Santos',
      age: 40
    },
  ]

  constructor() {}

  ngOnInit() {
    console.log(this.pessoas)
    let interval = setInterval(() => {
      this.count = this.count + 1
      if(this.count === 10 ) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome: string) {
    console.log(nome, 'clicou')
  }
}
