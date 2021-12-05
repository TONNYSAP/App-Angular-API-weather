import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ClimaTempo - com Angular';
  id = 12;
  mensagen = 'Olá';
    
  constructor() {  }

  ngOnInit(): void {

  }

  buscaCidades() {

    console.log('ola estou aqui')
  }

  myFunc() {

    alert('estou aqui')
  } 

}