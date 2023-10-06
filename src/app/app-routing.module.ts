import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemDisciplinaComponent} from './disciplina/mantem-disciplina/mantem-disciplina.component';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemDisciplinasComponent} from './disciplina/listagem-disciplinas/listagem-disciplinas.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';


const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  
  // Disciplinas
  {
    path: 'cadastrodisciplina',
    component: MantemDisciplinaComponent
  },
  {
    path: 'editadisciplina/:id',
    component: MantemDisciplinaComponent
  },
  {
    path: 'listagemdisciplinas',
    component: ListagemDisciplinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
