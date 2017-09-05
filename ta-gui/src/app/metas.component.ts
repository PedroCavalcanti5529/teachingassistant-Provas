import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

  @Component({
   selector: 'metas',
   templateUrl: './metas.component.html',
   styleUrls: ['./metas.component.css'],
   standalone: false
 })
 export class MetasComponent implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];

    atualizarAluno(aluno: Aluno): void {
       this.alunoService.atualizar(aluno);
    }

    getMeta(a: Aluno, chave: string): string {
      return a.metas.get(chave) || '';
    }

    setMeta(a: Aluno, chave: string, valor: string): void {
        a.metas.set(chave, valor);
    }

    ngOnInit(): void {
      this.alunos = this.alunoService.getAlunos();
    }

  }