import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  nome: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  AtivarNome(){
    this.nome = !this.nome
  }
}
