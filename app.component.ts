import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  altura: number;
  base: number;
  areafinal: number;
  radio: number;
  resultadoCirculo: number;
  resultadoCuadrado: number;
  resultadoRectangulo: number
  resultadoTriangulo: number;
  baseTriangulo: number;
  alturaTriangulo: number;
  lado: number;
  areaPrimera: number;
  baseTrapecio1: any;
  baseTrapecio2: any;
  alturaTrapecio: number;
  resultadoTrapecio: number;


  /***/
  reinicio: number;

  //************************************************************** */
  areaCirculo() {
    this.areafinal = 3.14 * this.radio * this.radio;
    this.resultadoCirculo = this.areafinal;
  }


  public reiniciarCirculo() {
    this.reinicio = 0;
    this.radio = this.reinicio;
    this.resultadoCirculo = this.reinicio;
  }
  //************************************************************** */

  areaCuadrado() {
    this.areafinal = this.lado * this.lado;
    this.resultadoCuadrado = this.areafinal;
  }

  public reiniciarCuadrado() {
    this.reinicio = 0;
    this.lado = this.reinicio;
    this.resultadoCuadrado = this.reinicio;

  }

  //************************************************************** */

  areaRectangulo() {
    this.areafinal = this.base * this.altura;
    this.resultadoRectangulo = this.areafinal;
  }

  public reiniciarRectangulo() {
    this.reinicio = 0;
    this.base = this.reinicio;
    this.altura=this.reinicio;
    this.resultadoRectangulo=this.reinicio;

  }

 
  //************************************************************** */
  areaTriangulo() {
    this.areafinal = (this.baseTriangulo * this.alturaTriangulo) / 2;
    this.resultadoTriangulo = this.areafinal;
  }

  public reiniciarTriangulo() {
    this.reinicio = 0;
    this.baseTriangulo= this.reinicio;
    this.alturaTriangulo= this.reinicio;
    this.resultadoTriangulo=this.reinicio;

  }

  //************************************************************** */
  areaTrapecio() {
    this.areaPrimera = (this.baseTrapecio1 * this.baseTrapecio2) / 2;
    this.areafinal = this.areaPrimera * this.alturaTrapecio;
    this.resultadoTrapecio = this.areafinal;
  }

  public reiniciarTrapecio() {
    this.reinicio = 0;
    this.baseTrapecio1 = this.reinicio;
    this.baseTrapecio2=this.reinicio;
    this.alturaTrapecio=this.reinicio;
    this.resultadoTrapecio=this.reinicio;

  }
  //************************************************************** */





 


}

