const mascotas = ['Perro', 'Gato'];
const libros = [{
  Titulo: 'Dias de Viajes',
  Autor: 'Aniko Villalba',
},{
  Titulo: 'Harry Potter',
  Autor: 'J. K. Rowling',
}];


class usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }
    
    countMascota(){
      return mascotas.length;
    }

    addMascotas(){
      this.mascotas.push(mascotas);
    }

    getBookNames(){
      return libros.map(libro => libro.Titulo )
    }

    addBooks(Titulo, Autor){
     this.libros.push({Titulo, Autor})
    }
}


const User = new usuario ('Sebastian', 'Fernandez', libros, mascotas)
User.countMascota();
User.addMascotas('gato');
User.addMascotas('loro');
User.addBooks('El señor de los anillos', 'J. R. R. Tolkien');



console.log('Full Name:', User.getFullName());
console.log('Mascotas:' , User.countMascota());
console.log('Libros:', User.getBookNames());