import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref } from '@angular/fire/storage';
import { deleteObject } from 'firebase/storage';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
   
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private storage: Storage){}

  isLogged=false;

  ngOnInit():void{
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data=>{this.expe=data;})
  }

  deleteImg(id: number) {

    const arrayId = this.expe.map(experiencia => experiencia.id).indexOf(id);
    console.log('arrayId', arrayId);

    /*console.log('path',this.educacion[0].path);*/
    const imgRef = ref(this.storage, this.expe[arrayId].path);
    /*console.log('imgRef', this.educacion[arrayId].path);*/
    if (this.expe[arrayId].path!=null){
      deleteObject(imgRef)
      .then(() => {
        console.log('Imagen borrada')
      }).catch((error) => {
        console.log('Error')
      })
    }
    
  }

  delete(id?: number){
    if(id!= undefined){
      this.deleteImg(id);

      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        },
        err=>{
          alert("No se pudo borrar la experiencia")
        }
        )
      }
    }
  }


