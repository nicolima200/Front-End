import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { Storage,ref,uploadBytes,getDownloadURL} from '@angular/fire/storage'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{

  nombre:string;
  apellido:string;
  titulo:string;
  url:string;
  acercaDe:string;

  urlImage: Observable<string>;
  fileName: Observable<string>;
  archivo: any;
  filepath:string;
  path:string;
  
  constructor(private personaS: PersonaService, private router:Router, private storage:Storage){

  }
  ngOnInit(): void {
    this.fileName=undefined;
  }
   

  onCreate(): void {
    const persona = new Persona(this.nombre, this.apellido,this.titulo,this.acercaDe, this.url );
    console.log('hasta acá');
    this.personaS.savePersona(persona).subscribe(
      data => {
        alert("Persona añadida");
        this.router.navigate([''])
      },
      err => {
        alert("Falló");
        this.router.navigate([''])
      }
    )
  }

  onSelect(e2: any) {

    //const filename=e2.target.files[0].name;
    //console.log(filename);
    this.fileName = e2.target.files[0].name;
    console.log('select', this.fileName);
    this.archivo = e2.target.files[0];
  }

  uploadImage(){
    if (this.fileName!=undefined){
      const id = Math.random().toString(36).substring(2);
    const file=this.archivo;
    const imgRef=ref(this.storage, `uploads/persona/IMG-${id}`);
    console.log('imgRef',imgRef);
    uploadBytes(imgRef,file)
      .then(async response=>{
        console.log('responsde',response)
        this.url=await getDownloadURL(response.metadata.ref);
        this.path=await response.metadata.fullPath
        console.log('url???', this.url);
        console.log('path',this.path)
        this.onCreate();
      })
      .catch(error=>console.log(error));
    }else{
      this.url="../../../assets/logos/error.png"
      this.onCreate();
    }
    

    
  }
}

