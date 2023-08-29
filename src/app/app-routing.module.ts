import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListagemComponent } from "./components/listagem/listagem.component";
import { DetalheUsuarioComponent } from "./components/detalhe-usuario/detalhe-usuario.component";

const routes: Routes = [
    {path: "", component: ListagemComponent},
    {path: "usuario/:id", component: DetalheUsuarioComponent},
    {path: "eventos", component: EventosComponent},
    {path: "first", component: FirstComponentComponent},
]; 

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}