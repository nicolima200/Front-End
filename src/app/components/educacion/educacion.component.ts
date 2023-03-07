import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref } from '@angular/fire/storage';
import { deleteObject } from 'firebase/storage';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion: Educacion[] = [];
  constructor(private educacionS: EducacionService, private tokenService: TokenService, private storage: Storage) {
  }


  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      },
    )
  }

  deleteImg(id: number) {

    const arrayId = this.educacion.map(estudio => estudio.id).indexOf(id);
    /*console.log('arrayId', arrayId);*/

    /*console.log('path',this.educacion[0].path);*/
    const imgRef = ref(this.storage, this.educacion[arrayId].path);
    /*console.log('imgRef', this.educacion[arrayId].path);*/
    if (this.educacion[arrayId].path!=null){
      deleteObject(imgRef)
      .then(() => {
        console.log('Imagen borrada')
      }).catch((error) => {
        console.log('Error')
      })
    }
    
  }

  delete(id?: number) {
    if (id != undefined) {
      this.deleteImg(id);

      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },
        err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
