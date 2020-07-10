//interfaces-> para definir datos
interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number;//opcional
    sueldo?: number;//opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaja: string) => string;
    //calcular impuesto ->parametro numero impusto, sueldo + sueldo * impuesto
    //estadoActualno reciba parametro, 'AP','AF','AT'
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: ()=> 'AP'|'AF'|'AT';
}

const pame: Usuario = {
    nombre: 'Pamela',
    apellido: 'Pachacama',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: '+ mensaje;
    },
    calcularImpuesto:(impuesto)=>{
       const imps= this.sueldo + this.sueldo *impuesto;
        return imps;
    },
    estadoActual: ()=>{
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}

pame.imprimirUsuario("s");