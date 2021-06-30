import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  buscador          : string = '';
  hayError          : boolean = false;
  paises            : Country[] = [];
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(
    private paisService: PaisService) { }

  buscar(buscador: string){
    this.hayError = false;
    this.buscador = buscador;
    this.mostrarSugerencias = false;
    this.paisService.buscarPais(buscador)
      .subscribe(paises =>{
        this.paises = paises;
      }, error =>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(buscador: string) {
    this.hayError = false;
    this.buscador = buscador;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(buscador)
      .subscribe(
        paises => this.paisesSugeridos = paises,
        error => this.paisesSugeridos = []
      );
  }

  buscarSugerido(buscador: string) {
    this.buscar(buscador);
  }

}
