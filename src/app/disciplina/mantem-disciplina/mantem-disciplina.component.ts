import { Component } from '@angular/core';
import {Disciplina} from '../../shared/modelo/disciplina';
import {DISCIPLINAS} from '../../shared/modelo/DISCIPLINAS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-disciplina',
  templateUrl: './mantem-disciplina.component.html',
  styleUrls: ['./mantem-disciplina.component.css']
})
export class MantemDisciplinaComponent {

  disciplinaDeManutencao: Disciplina;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  disciplinas = DISCIPLINAS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.disciplinaDeManutencao = new Disciplina(0,'','');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const disciplinaEncontrado = this.disciplinas.find(
        disciplina => disciplina.id === Number(idParaEdicao));
      if (disciplinaEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.disciplinaDeManutencao = disciplinaEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.disciplinaDeManutencao) {
      this.disciplinas.push(this.disciplinaDeManutencao);
    }
    this.disciplinaDeManutencao = new Disciplina(0,'','');
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemdisciplinas']);
  }

}
