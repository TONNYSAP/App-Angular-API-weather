import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit {

  suaCidade: string = ''
  api!: { 
    key: string;
    base: string; 
    lang: string; 
    units: string;
   }[];

   nomeCidade: string = ''
   temperatura!: number
   umidade!: number
   pressao!: number
   descricao: string = ''
  
  constructor() { }

  ngOnInit(): void {
    this.api = [{
      key: "64ed82577ced7f69cb1687f0ce536131",
      base: "https://api.openweathermap.org/data/2.5/",
      lang: "pt_br",
      units: "metric"
    }]
  }

  buscaClima() {
    fetch(`${this.api[0].base}weather?q=${this.suaCidade}&lang=${this.api[0].lang}&units=${this.api[0].units}&APPID=${this.api[0].key}`)
        .then(response => {
          if(!response.ok) {
            alert('ERRO');
          }
          return response.json();
        })
        .then(response => {
          this.displayResults(response)
        })
        
  }

  displayResults(response: any) {
    console.log(response) //Array de objetos
    console.log(response.name) //Nome da cidade
    console.log(response.main.temp) //Temperatuda da Cidade
    console.log(response.main.humidity) //Umidade da Cidade
    console.log(response.main.pressure) //Pressão da Cidade
    console.log(response.weather[0].description) //Descrição do Clima da Cidade

    this.nomeCidade = response.name
    this.temperatura = response.main.temp
    this.umidade = response.main.humidity
    this.pressao = response.main.pressure
    this.descricao = response.weather[0].description
                  
  }

  limparCampos() {
    window.location.reload()
  }
     
}
