import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL= environment.URL +'persona/';
  constructor(private httpClient: HttpClient) { }

  public list():Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + 'traer');
  }

  public getOne(id:number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+`traer/perfil/${id}`);
  }

  public savePersona(persona: Persona ): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear', persona);
  }
}
