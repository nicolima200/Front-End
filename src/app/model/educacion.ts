export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;
    url:string;
    path:string;

    constructor(nombreE:string, descripcionE:string, url:string, path:string){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;
        this.url=url;
        this.path=path;
    }
}
