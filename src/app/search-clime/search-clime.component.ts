import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-clime',
  templateUrl: './search-clime.component.html',
  styleUrls: ['./search-clime.component.css']
})
export class SearchClimeComponent implements OnInit {
  title = 'Tempo Agora - com Angular'
  
  //public estadovalue!: string;

  meuEstado: string = ""
  suaCidade: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }

  Buscar() {

    console.log(this.meuEstado + '/' + this.suaCidade)

    if(this.meuEstado != '' && this.suaCidade != '') {

      window.location.href = 'https://www.tempoagora.com.br/previsao-do-tempo/' + this.meuEstado + '/' + this.suaCidade 

      this.meuEstado = ''
      this.suaCidade = ''
    }else {

      alert('ERRO: escreva os campos corretamente!')
    }
      
  }

}
