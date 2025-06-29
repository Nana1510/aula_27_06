class Usuario {
    constructor(senha) {
      this.senha = senha;
    }
  
    getSenha() {
      return this.senha.length > 6 ? this.senha : "Senha fraca";
    }
  
    setSenha(nova) {
      if (nova.length > 6) this.senha = nova;
      else console.log("Senha muito curta");
    }
  }
  

  const user = new Usuario("123");
  console.log(user.getSenha());
  
  user.setSenha("hellokitty123");
  console.log(user.getSenha());
  