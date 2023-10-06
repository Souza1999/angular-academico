import { Component } from '@angular/core';
import {Disciplina} from '../../shared/modelo/disciplina';
import {DISCIPLINAS} from '../../shared/modelo/DISCIPLINAS';
import { Usuario } from 'src/app/shared/modelo/usuario';

@Component({
  selector: 'app-listagem-disciplinas',
  templateUrl: './listagem-disciplinas.component.html',
  styleUrls: ['./listagem-disciplinas.component.css']
})
export class ListagemDisciplinasComponent {

  disciplinas = DISCIPLINAS;
  excluir(disciplinaAremover: Disciplina): void {
    const idx = this.disciplinas.findIndex(disciplina => 
      disciplina.id === disciplinaAremover.id);

      this.disciplinas.splice(idx, 1);
  }
}
