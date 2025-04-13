//Tipos de datos
let nombre:string = 'Daniel';
console.log(nombre);
nombre = 'Gloria';
console.log(nombre);
let edad:number = 58;
let esProfesor:boolean = true;
let hobbies:string[] = ['Investigar','Programar'];
console.log(hobbies);
let tupla:[string,number] = ['Zulay',65];
let varibaleAny :any = 'Puede recibir cualquier tipo de dato';
varibaleAny = 17;
console.log(varibaleAny);

// Enumarados
enum diasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}
console.log(diasSemana);
console.log(diasSemana.Lunes);
console.log(diasSemana[0]);

//Tipo Unión (Multiples tipos de datos)
let id:string | number = 'ABC123';

id = 456;
id = 'Venezuela';

//Tipo personalizado de (Tipo alias)
type Punto = {
    x : number,
    y : number
}

let miPunto:Punto = {x:10, y:20};
console.log(`Mi punto es: (${miPunto.x}, ${miPunto.y})`);

//Creación de interface
interface Persona {
    nombre: string;
    edad : number;
    saludar: () => void;
}

//Creando un objeto usando la interfaz
const persona:Persona ={
    nombre: 'Ariana Aguilar',
    edad : 8,
    saludar : ()=> console.log('Hola desde la interfaz')
}

console.log(persona);
console.log(persona.saludar());


//Crear una clase  implentar la interfaz Persona
class Estudiante implements Persona{
    public nombre:string;
    public edad:number;
    public curso:string;
    constructor(nombre:string, edad:number,curso:string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
   saludar():void{
    console.log(`Hola, soy  ${this.nombre}, tengo ${this.edad} años y estudia ${this.curso}`);
   }
   estudiar():void {
    console.log(`${this.nombre} está estudiando para el curso ${this.curso}`);
   }
}

// Creando una nueva clase Profesor
class Profesor implements Persona{
    public nombre:string;
    public edad:number;
    public materia:string;
    constructor(nombre:string,edad:number,materia:string){
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia
    }
    saludar(): void{
        console.log(`Saludos, soy el profesor ${this.nombre} y enseño ${this.materia}`);
    }
    enseñar():void{
        console.log(`${this.nombre} está enseñando ${this.materia}`);
    }
}

//Crear las instancias de la clase Estudiante - new
const estudiante1 = new Estudiante('Fernanda',25,'Música');
const estudiante2 = new Estudiante('Diego',25,'Ingeniería de sonido');
//Crear las instancias de la clase Profesor - new
const profesor1 = new Profesor('Fernando Figueredo',47,'Percusión');
const profesor2 = new Profesor('Yuraima Perdomo',48,'Administración de Empresas');
console.log('---- Estudiantes ----');

estudiante1.saludar();
estudiante1.estudiar();
estudiante2.saludar();
estudiante2.estudiar();
console.log('---- Profesores ----');
profesor1.saludar();
profesor1.enseñar();
profesor2.saludar();
profesor2.enseñar();


//Trabajando con funciones
function sumar(valor1:number,valor2:number):number{
    return valor1 + valor2;
}
console.log('Suma: ', sumar(30,50));

//Función con parámetro opcional
let mostrarDatos = (nombre:string,edad?:number):void =>{
    console.log(`Nombre: ${nombre}, Edad: ${edad || 'No especificada'} `);
}
mostrarDatos('Victor Luis',30);
mostrarDatos('Fernandito');













