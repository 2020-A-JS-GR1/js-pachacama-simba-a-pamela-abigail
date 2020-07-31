const fs = require('fs');
const inquirer = require('inquirer');

async function main() {
    try{
        console.log('Menu');
        console.log('#########################################');
        console.log('Opciones');
        console.log('#########################################');
        console.log('1. Padres');
        console.log('2. Hijos');
        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'opcion',
                message: 'Ingresa la opcion'
            },
        ]).then(answers => {
            console.info('Answer:', answers.opcion);
            ejercicioPadre(answers.opcion);
        });

    }catch (e) {
        console.error('error',e);
    }
}

main();

function promesaLeerTipo(path) {
    const miPromesaTipo = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject('Error promesa', error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    )
    return miPromesaTipo
}

function promesaEscribirTipo(path,contenidoActual, contenidoNuevo) {
    contenidoActual.push(contenidoNuevo)
    const miPromesaPadre = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,JSON.stringify(contenidoActual),'utf-8',
                (error)=>{
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        resolve(contenidoNuevo);
                    }

                });
        }
    )
    return miPromesaPadre
}

function promesaActualizarTipo(opcion,name,path,contenidoActual, contenidoNuevo) {
    console.log(name);
    switch (name) {
        case '1':
            contenidoActual[parseInt(opcion)-1].nombre = contenidoNuevo;
            break
        case '2':
            contenidoActual[parseInt(opcion)-1].categoria = contenidoNuevo;
            break
        case '3':
            contenidoActual[parseInt(opcion)-1].nuevas = contenidoNuevo;
            break
        case '4':
            contenidoActual[parseInt(opcion)-1].rating = contenidoNuevo;
            break
        case '5':
            contenidoActual[parseInt(opcion)-1].descripcion = contenidoNuevo;
            break
        default:
            console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
    }
    const miPromesaActualizarPadre = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,JSON.stringify(contenidoActual),'utf-8',
                (error)=>{
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        resolve(contenidoNuevo);
                    }

                });
        }
    )
    return miPromesaActualizarPadre
}

function borrar(id,path,contenidoActual) {
    contenidoActual.forEach(function(currentValue, index, arr){
        console.log(contenidoActual[index].id)
        console.log(id)
        if(contenidoActual[index].id===id){
            contenidoActual.splice(index, 1);
        }

    })
    console.log(contenidoActual)
    const miPromesaBorrar = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,JSON.stringify(contenidoActual),'utf-8',
                (error)=>{
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        resolve(contenidoActual);
                    }

                });
        }
    )
    return miPromesaBorrar
}

function promesaActualizarTipoHijo(opcion,name,path,contenidoActual, contenidoNuevo) {
    console.log(name);
    switch (name) {
        case '1':
            contenidoActual[parseInt(opcion)-1].nombre = contenidoNuevo;
            break
        case '2':
            contenidoActual[parseInt(opcion)-1].edad = contenidoNuevo;
            break
        case '3':
            contenidoActual[parseInt(opcion)-1].casado = contenidoNuevo;
            break
        case '4':
            contenidoActual[parseInt(opcion)-1].oscar = contenidoNuevo;
            break
        case '5':
            contenidoActual[parseInt(opcion)-1].descripcion = contenidoNuevo;
            break
        default:
            console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
    }
    const miPromesaActualizarHijo = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,JSON.stringify(contenidoActual),'utf-8',
                (error)=>{
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        resolve(contenidoNuevo);
                    }

                });
        }
    )
    return miPromesaActualizarHijo
}

async function ejercicioPadre(opcion) {
    try{
        switch (opcion) {
            case '1':
                try{
                    console.log('Menu');
                    console.log('#########################################');
                    console.log('Opciones');
                    console.log('#########################################');
                    console.log('1. Leer Padres');
                    console.log('2. Escribir nuevo Padre');
                    console.log('3. Actualizar Padre');
                    console.log('4. Eliminar Padre');
                    await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'opcion',
                            message: 'Ingresa la opcion'
                        },
                    ]).then(answers => {
                        console.info('Answer:', answers.opcion);
                        eleccion(answers.opcion,'./04-padre-pelicula.json');
                    });
                } catch (e) {
                    console.error('error',e);
                }
                break;
            case '2':
                try{
                    console.log('Menu');
                    console.log('#########################################');
                    console.log('Opciones');
                    console.log('#########################################');
                    console.log('1. Leer Hijos: ');
                    console.log('2. Escribir nuevo hijo:');
                    console.log('3. Actualizar hijo: ');
                    console.log('4. Eliminar hijo: ');
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'opcion',
                            message: 'Ingresa la opcion'
                        },
                        {
                            type: 'input',
                            name: 'padre',
                            message: 'Ingresa el padre'
                        },
                    ]).then(answers => {
                        console.info('Answer:', answers.opcion);
                        eleccionHijo(answers.opcion,answers.padre,answers.padre+'-hijo.json');
                    });
                } catch (e) {
                    console.error('error',e);
                }
                break
            default:
                console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
        }

    }catch (error) {
        console.error(error);
    }

}

async function eleccion(opcion, path) {
    try{
        switch (opcion) {
            case '1':
                const contenidoArchivoActual = await promesaLeerTipo(path);
                //console.log('Inicio',contenidoArchivoActual)
                const padres= JSON.parse(contenidoArchivoActual);
                console.log(padres);
                break;
            case '2':
                try{
                const respuesta = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'id',
                        message: 'ID'
                    },{
                        type: 'input',
                        name: 'nombre',
                        message: 'Ingrese titulo de pelicula'
                    },{
                        type: 'input',
                        name: 'categoria',
                        message: 'Ingrese tipo de categorias'
                    },{
                        type: 'input',
                        name: 'nuevas',
                        message: 'Existe nuevas versiones'
                    },{
                        type: 'input',
                        name: 'rating',
                        message: 'Ingrese el rating'
                    },{
                        type: 'input',
                        name: 'descripcion',
                        message: 'Ingrese la descripcion'
                    }

                ]);
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    //console.log(padres);
                    await promesaEscribirTipo(path,padres,respuesta);
                } catch (e) {
                    console.error('error',e);
                }
                break
            case '3':
                try{
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    console.log(padres);
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'opcion',
                            message: 'Ingrese el número del padre'
                        },{
                            type: 'input',
                            name: 'variable',
                            message: 'Ingrese el numero del campo a cambiar:\n'+
                                '1. titulo\n'+'2. categoria\n'+'3.nuevas versiones\n'+'4.rating\n'+'5.descripcion'
                        },{
                            type: 'input',
                            name: 'nuevoContenido',
                            message: 'Ingrese nuevo contenido'
                        }

                    ])
                        .then(answers => {
                        console.info('Answer:', answers.variable);
                        promesaActualizarTipo(answers.opcion, answers.variable,path,padres,answers.nuevoContenido);
                    });

                }catch (e) {
                    console.error('error',e);
                }
                break
            case '4':
                try{
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    console.log(padres);
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Engrese el id'
                        }
                    ])
                        .then(answers => {
                           borrar( answers.id,path,padres);
                        });
                }catch (e) {
                    console.error('error',e);
                }
                break

            default:
                console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
        }
        main()
    }catch (error) {
        console.error(error);
    }
}
async function eleccionHijo(opcion,padre, path) {
    try{
        switch (opcion) {
            case '1':
                const contenidoArchivoActual = await promesaLeerTipo(path);
                //console.log('Inicio',contenidoArchivoActual);
                const padres= JSON.parse(contenidoArchivoActual);
                console.log(padres);
                break;
            case '2':
                try{
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'ID'
                        },{
                            type: 'input',
                            name: 'nombre',
                            message: 'Ingrese el actor o actriz'
                        },{
                            type: 'input',
                            name: 'edad',
                            message: 'Ingrese la edad'
                        },{
                            type: 'input',
                            name: 'casado',
                            message: 'Esta casado o casada'
                        },{
                            type: 'input',
                            name: 'oscar',
                            message: 'Ingrese cuantos oscars ha ganado'
                        },{
                            type: 'input',
                            name: 'descripcion',
                            message: 'Ingrese la descripcion'
                        }

                    ]);
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    //console.log(padres);
                    await promesaEscribirTipo(path,padres,respuesta);
                } catch (e) {
                    console.error('error',e);
                }
                break
            case '3':
                try{
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    console.log(padres);
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'opcion',
                            message: 'Ingrese el número del hijo'
                        },{
                            type: 'input',
                            name: 'variable',
                            message: 'Ingrese el numero del campo a cambiar:\n'+
                                '1. nombre\n'+'2. edad\n'+'3.casado\n'+'4.oscar\n'+'5.descripcion'
                        },{
                            type: 'input',
                            name: 'nuevoContenido',
                            message: 'Ingrese nuevo contenido'
                        }

                    ])
                        .then(answers => {
                            console.info('Answer:', answers.variable);
                            promesaActualizarTipoHijo(answers.opcion, answers.variable,path,padres,answers.nuevoContenido);
                        });

                }catch (e) {
                    console.error('error',e);
                }
                break
            case '4':
                try{
                    const contenidoArchivoActual = await promesaLeerTipo(path);
                    const padres= JSON.parse(contenidoArchivoActual);
                    console.log(padres);
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Engrese el id'
                        }
                    ])
                        .then(answers => {
                            borrar( answers.id,path,padres);
                        });
                }catch (e) {
                    console.error('error',e);
                }
                break

            default:
                console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
        }
        main()
    }catch (error) {
        console.error(error);
    }
}


