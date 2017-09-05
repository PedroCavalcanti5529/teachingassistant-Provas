export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  login_Github: string;
  metas: Map<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.login_Github = "";
    this.metas = new Map<string,string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.login_Github = this.login_Github;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): Map<string,string> {
    return new Map(this.metas);
  }

  //could use: return new Map(this.metas);
}
