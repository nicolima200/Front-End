import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent {
  constructor (private router:Router){}

  login(){
    this.router.navigate(['/login'])
  }
}
