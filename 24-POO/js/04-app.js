class Cliente {
  
    #nombre;
  
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const juan = new Cliente('Juan', 200);
juan.setNombre('Juan');
console.log(juan.getNombre());
