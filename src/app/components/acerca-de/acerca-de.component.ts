import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent{
  persona: Persona= new Persona("","","","","");
  id:number=28;
  /*persona: Persona;*/
  isLogged:boolean;
  constructor (public personaService: PersonaService, private tokenService: TokenService){};

  ngOnInit():void{
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.getOne(27).subscribe(data=> {this.persona=data});
    console.log('lista',this.persona);
    
    
  }

}
