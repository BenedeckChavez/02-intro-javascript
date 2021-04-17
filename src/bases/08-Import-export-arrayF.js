import  oreo from "../data/heroes";

 const getHeroeByID = id =>  oreo.find( x => x.id === id) 
 
//  console.log( getHeroeByID(2));

 
 const getHeroeByOwner = Owner =>  oreo.filter( x => x.owner === Owner) 

 
//  console.log( getHeroeByOwner('DC'));
//  console.log(owner);

export {
    getHeroeByID,
    getHeroeByOwner
}