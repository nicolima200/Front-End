import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { Observable } from 'rxjs/internal/Observable';
import { Storage,ref,uploadBytes,getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE : string = '';
  descripcionE : string = '';
  url: string;
  urlImage: Observable<string>;
  fileName: Observable<string>;
  archivo: any;
  filepath:string;
  path:string;

  constructor(private sExperiencia: SExperienciaService, private router: Router, private storage: Storage){}

  ngOnInit():void{
    this.fileName=undefined;
  }

  onCreate(): void{
    const expe= new Experiencia(this.nombreE,this.descripcionE, this.url, this.path);
    this.sExperiencia.save(expe).subscribe(
      data =>{  
          alert("Experiencia añadida");
          this.router.navigate(['']);
      }, 
      err =>{
        alert("Falló");
        this.router.navigate(['']); 
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
    const imgRef=ref(this.storage, `uploads/experiencia/IMG-${id}`);

    uploadBytes(imgRef,file)
      .then(async response=>{
        console.log(response)
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