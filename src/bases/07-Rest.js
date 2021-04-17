
    const personajes = ['Goku','vegeta','trunks'];

    // console.log(personajes[0]);
    // console.log(personajes[1]);
    // console.log(personajes[2]);

    const [,,p3] = personajes;

    console.log(p3);

    const retornaArreglo = () => (['ABC',123]);
    const [letras, numeros] = retornaArreglo();

    console.log(letras,numeros);

    const NewuseState = (val) => ([val,()=>{console.log('Hola Mundo');}])

    const arr = NewuseState('Goku');

    console.log(arr);
    arr[1]();

    const [nombre, NuevaFuncion] = NewuseState('Goku2');
    console.log(nombre);
    NuevaFuncion();