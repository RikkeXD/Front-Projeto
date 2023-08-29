import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/Models/Usuario';

import { ListagemService } from 'src/app/services/listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private listagemService: ListagemService) {
    this.getUsuario()
  }

  ngOnInit(): void {
  }

  getUsuario(): void {
    this.listagemService.getAll().subscribe((usuarios) => (this.usuarios = usuarios));
  }

}
