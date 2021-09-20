import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CALCULADORA';
  titulo2 = 'Estudiante: Raul Francisco Mendez Aldana, Carnet: 0907-18-12017, Inge. Carlos Hernandez';
  opA!:number;
  opB!:number;
  resultado!:number;

  okSumar():void{
this.resultado = this.opA + this.opB

  }
  okRestar():void{
    this.resultado = this.opA - this.opB
    
      }
      okMultiplicar():void{
        this.resultado = this.opA * this.opB
        
          }
          okDividir():void{
            this.resultado = this.opA / this.opB
            
              }
}
