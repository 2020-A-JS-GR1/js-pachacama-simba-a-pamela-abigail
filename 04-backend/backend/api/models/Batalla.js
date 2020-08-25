/**
 * Batalla.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true,//por defecto es false
    },
    //RElaciones
    // Pokemon - Usuario

    pokemon:{ //nombre fk
      model: 'Pokemon',//modelo con el cual relacionamos
      required: true, //Requerido 1 - N
      //false //opcional 0-N por defecto
    },
  },

};

