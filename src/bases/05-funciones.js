
// const saludar =  function (nombre) {
//     return ` hola  ${nombre}`;
// }


const saludar2 = (nombre) => {
    return ` hola  ${nombre}`;
}

const saludar3 = (nombre) => ` hola  ${nombre}`;
const saludar4 = () => (` hola `);



console.log(saludar2('Vegeta'))
console.log(saludar3('Vegeta'))
console.log(saludar4())


const getUser = () => ({
        uid: 'ASD123',
        username:'HOLA_MUNDO'
    })

console.log(getUser());

function getUsuarioActivo (nombre ) {
    return {
        
        uid: 'ASD123',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


const getUsuarioActivo2  =  (nombre) => ({ uid: 'ASD123', username:nombre});

const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo2);