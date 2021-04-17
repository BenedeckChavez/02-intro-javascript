
const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion: {
        calle:'de los cactus',
        numero:648,
        CP:27272,
        lat:14.20631,
        lng:31.324185
    }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)