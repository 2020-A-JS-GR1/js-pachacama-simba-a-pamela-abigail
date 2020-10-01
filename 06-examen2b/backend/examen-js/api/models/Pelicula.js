/**
 * Pelicula.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore:'default', //nombre conexion
  tableName:'pelicula',//nombre tabla
  attributes: {
    nombre:{
      type: 'string',
      required: true,
      unique: true,// Por defecto es false
      minLength: 5,
      maxLength: 25
    },
    categoria:{ // nombre atributo
      type: 'string',
      required: true,
      maxLength:1

    },
    nuevas:{
      type: 'string',
      required: true // Por defecto es false
    },
    rating:{
      type: 'number',
      required: true
      // Por defecto es false
    },
    descripcion:{
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 25
    },
    //relaciones
    //pelicula-actor
    actores:{//uno a muchos(nombre en plural)
      collection:'Actor',//modelo a relacionarse
      via: 'pelicula' //Nombre atributo fk en el modelo relacional
    }

  },

};
