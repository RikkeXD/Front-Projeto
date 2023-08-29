import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome = "Rikelmi";
  sobrenome = "Alves da Silva";
  idade = "39 Anos"
  odio = "Projeto"
  constructor() { }

  ngOnInit(): void {
  }

}
