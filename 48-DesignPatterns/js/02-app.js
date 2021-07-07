// class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Taiel', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Empresa 1');
console.log(cliente);