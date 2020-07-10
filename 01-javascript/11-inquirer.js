const inquirer = require('inquirer');

async function main() {
    try{
        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa tu Nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu Edad'

            }
        ]);
        console.log('Respuesta', respuesta);
    }catch (e) {
        console.error('error',e);
    }
}

main();