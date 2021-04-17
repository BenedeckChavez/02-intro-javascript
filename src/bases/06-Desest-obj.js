 

 const persona = {
     nombre: 'Tony',
     edad: 45,
     clave: 'Ironman',
    //  rango: 'Soldado',
 }

//  const { nombre, edad, clave } = persona;

//  console.log(nombre)
//  console.log(edad)
//  console.log(clave)
// //  console.log(persona.edad)
// //  console.log(persona.clave)


const retornaPersona = ({nombre,edad, rango = 'Capitan', clave}) => ({ nombreClave: clave, anios:edad, latlng : { lat:14.132, lng: 65.321 }, });

const avenger = retornaPersona(persona);
// const {nombreClave,anios,latlng:{lat,lng}} = retornaPersona(persona);

const {nombreClave,anios,latlng} = retornaPersona(persona);
const {lat,lng} = latlng;

console.log(avenger,nombreClave,anios,lat,lng);