const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente a una tarea'

}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion,

    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;




module.exports = {

    argv
};