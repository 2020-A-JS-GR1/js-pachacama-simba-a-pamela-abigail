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
    var contenido=[];
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

/*function promesaActualizarTipo(path) {
    const miPromesaActualizarPadre = new Promise(
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
    return miPromesaActualizarPadre
}*/

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
                        eleccion(answers.opcion,'./04-tipo-anime.json');
                    });
                } catch (e) {
                    console.error('error',e);
                }
                break;
            case '2':
                try{
                    eleccion('1','./04-tipo-anime.json');
                    console.log('Menu');
                    console.log('#########################################');
                    console.log('Opciones');
                    console.log('#########################################');
                    console.log('1. Leer Hijos de: ');
                    console.log('2. Escribir nuevo hijo de:');
                    console.log('3. Actualizar hijo de: ');
                    console.log('4. Eliminar hijo de: ');
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'opcion',
                            message: 'Ingresa la opcion'
                        },
                    ]).then(answers => {
                        console.info('Answer:', answers.opcion);
                        eleccion(answers.opcion,path);
                    });
                } catch (e) {
                    console.error('error',e);
                }
            default:
                console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
        }

    }catch (error) {
        console.error(error);
    }

}
//ejercicioPadre('./04-tipo-anime.txt', ['02','Shone',2,false,4,'El shojo es algo bonito']);


async function eleccion(opcion, path) {
    try{
        switch (opcion) {
            case '1':
                const contenidoArchivoActual = await promesaLeerTipo(path);
                console.log('Inicio',contenidoArchivoActual)
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
                        message: 'Ingrese el tipo de anime'
                    },{
                        type: 'input',
                        name: 'categoria',
                        message: 'Ingrese la numero de categorias'
                    },{
                        type: 'input',
                        name: 'nuevas',
                        message: 'Existe nueva actualizacion'
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

            case '4':
            default:
                console.log('Lo lamentamos, no existe esta opcion ' + opcion + '.');
        }
    }catch (error) {
        console.error(error);
    }
main()
}
/*var promesa = promesaLeerTipo('./04-tipo-anime.json')
    .then(
        (result) => {
            console.log(result);
            var padres = JSON.parse(result);
            padres[0].descripcion = padres[0].descripcion + "Muy bonito"
            padres.push(nuevoContenido);
            promesaEscribirTipo('./04-tipo-anime.json', JSON.stringify(padres));
        }
    );*/
