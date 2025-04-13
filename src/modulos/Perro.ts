import { Animal}  from "./Animal";

export class Perro extends Animal{
    private raza:string;
    constructor(nombre:string,raza:string){
        super(nombre)
        this.raza = raza;
    }
    ladrar():void{
        console.log(`${this.nombre} ${this.raza} dice: Guauuuu Guauuuu!`);
    }
}