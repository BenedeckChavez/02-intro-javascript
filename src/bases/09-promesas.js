import {getHeroeByID} from '../bases/08-Import-export-arrayF'

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve(getHeroeByID(2));
//     }, 2000);

// });

// promesa.then((resp) => {console.log(resp); }).catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroeByID(id)

             if(p1)
                resolve(p1);
             else
                reject('No se encuentra el heroe');

        }, 2000);

    });
}

getHeroeByIdAsync(1).then( console.log ).catch( console.warn );