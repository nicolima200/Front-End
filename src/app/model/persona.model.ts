export class Persona{
    id?:number;
    nombre: string;
    apellido: string;
    url: string;
    acercaDe:string;
    titulo:string;

    constructor(nombre: string, apellido: string,titulo:string, acercaDe:string, url: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.url=url;
        this.acercaDe=acercaDe;
        this.titulo=titulo;
    }
}