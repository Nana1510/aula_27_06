class Animal {
    emitirSom() {}
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Au au");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("Miau");
    }
  }
  
  class Pato extends Animal {
    emitirSom() {
      console.log("Quack");
    }
  }
  
  cachorro = new Cachorro()
  gato = new Gato()
  pato = new Pato()
  
  cachorro.emitirSom()
  gato.emitirSom()
  pato.emitirSom()