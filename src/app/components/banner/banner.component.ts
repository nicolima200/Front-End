import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from 'src/app/service/persona.service';
import * as Long from 'long';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  persona: Persona= new Persona("","","","","");
  /*persona:Persona;*/
  id:number=28;
  actual:any;
  
  isLogged:boolean;
  constructor(public personaService: PersonaService, private tokenService: TokenService){}

  /*ngOnInit():void{
    
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    this.personaService.getOne(27).subscribe(data=> {this.persona=data});
    console.log('type',this.persona);
  }*/

  /*cargarPersona(): void {
    console.log('list',this.personaService.getPersona(28));
    this.personaService.list().subscribe(
      data => {
        this.persona = data;
        
      },
    )
  }*/
}
