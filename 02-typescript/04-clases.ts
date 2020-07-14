//clases

class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    private nombreYApellido:string=''

    constructor(
        nombreParametro:string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre+ ' '+ this.apellido;
    }

    private mostrarNombreApellido(){
        return this.nombreYApellido;
    }
}
class Usuario extends Persona{
    constructor(
        nomnreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public  estadoCivil: string,
    ) {
        super(nomnreParametro, apellidoParametro);
    }

}

const pame = new Usuario(
    'Pamela',
    'Pachacama',
    '1724231871',
    'soltera'
);

console.log(pame.nombre);
console.log(pame.apellido);
console.log(pame.cedula);
console.log(pame.estadoCivil);
