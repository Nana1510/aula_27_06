class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
      super(nome, salario);
      this.departamento = departamento;
    }
  
    relatorioGerencial() {
      return `Gerente: ${this.nome}, Departamento: ${this.departamento}, Salário: R$${this.salario}`;
    }
  }
  
  // Teste
  const gerente = new Gerente("Ana", 8000, "TI");
  console.log(gerente.relatorioGerencial());