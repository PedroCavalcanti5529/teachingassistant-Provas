import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: "", login_Github: ""};
   alunoService = new AlunoService();
   alunos: Aluno[] = [];

   gravar(a: Aluno): void {
     this.alunoService.gravar(a);
     this.alunos.push(a);
<<<<<<< HEAD
     this.aluno = {nome: "", cpf: "", email: "", login_Github: ""};
=======
     this.aluno = {nome: "", cpf: "", email: ""};
>>>>>>> fd52d3e (visualizacao da lista de alunos cadastrados)
  }
}
