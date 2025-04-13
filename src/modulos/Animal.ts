export class Animal{
    constructor(public nombre:string){

    }
    moverse():void{
        console.log(`${this.nombre} se está moviendo`);
    }
}
