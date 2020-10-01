/**
 * Actor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', //nombre conexion
  tableName: 'actor',//nombre tabla
  attributes: {
    nombreactor: {
      type: 'string',
      required: true,
      unique: true,// Por defecto es false
      minLength: 5,
      maxLength: 25
    },
    edad: { // nombre atributo
      type: 'number',
      required: true,

    },
    casado: {
      type: 'string',
      required: true // Por defecto es false
    },
    oscar: {
      type: 'number'
    },
    descripcion: {
      type: 'string',
      minLength: 5,
      maxLength: 25
    },
    //relaciones
    //actor-pelicula
    pelicula:{ //nombre fk
      model: 'Pelicula',//modelo con el cual relacionamos
      required: true, //Requerido 1 - N
      //false //opcional 0-N por defecto
    }
  },
};
