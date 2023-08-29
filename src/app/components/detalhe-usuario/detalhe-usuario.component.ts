import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from 'src/app/Models/Usuario';

import { ListagemService } from 'src/app/services/listagem.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {
  usuario?: Usuario 

  constructor(private listagemService: ListagemService, private route: ActivatedRoute) {
    this.getUsuario()
  }

  ngOnInit(): void {
  }
  getUsuario(){
    const id = String(this.route.snapshot.paramMap.get("id"))
    this.listagemService.getItem(id).subscribe((usuario) => (this.usuario = usuario));
  }

}
