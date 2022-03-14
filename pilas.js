console.log("Pilas funcionando");


let libros = ["libro 1", "libro 2", "libro 3", "libro 4", "libro 5"];

console.table(libros)


// let libroEliminado = libros.pop()

//console.log(libroEliminado);

// console.log("Luego de hacer pop")

// console.table(nombres)


//libros.push("libro 6")

//console.log("Luego de hacer push")
//console.table(libros)


// dada la pila "libros" crear una pila auxiliar, desapilar y apilar en la nueva pila en orden inverso
// 1 2 3 4 5
// 5 4 3 2 1

// librosAuxiliar = [];

// for(let i = libros.length -1 ; i>= 0; i--){
//     librosAuxiliar.push(libros.pop());
// }
let j = 0

// for(let i = libros.length -1 ; i>= 0; i--){
//     librosAuxiliar[j] = (libros.pop());
//     j++
// }

//console.table(librosAuxiliar)

libros.shift()
console.table(libros)

libros.unshift("Libro 0")

console.table(libros)