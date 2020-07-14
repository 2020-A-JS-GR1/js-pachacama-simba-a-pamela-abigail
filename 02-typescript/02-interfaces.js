var _this = this;
var pame = {
    nombre: 'Pamela',
    apellido: 'Pachacama',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        var imps = _this.sueldo + _this.sueldo * impuesto;
        return imps;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
pame.imprimirUsuario("s");
