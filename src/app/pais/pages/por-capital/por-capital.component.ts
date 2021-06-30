import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  buscador: string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor(
    private paisService: PaisService) { }

  buscar(buscador: string){
    this.hayError = false;
    this.buscador = buscador;
    this.paisService.buscarPorCapital(buscador)
      .subscribe(paises =>{
        this.paises = paises;
      }, error =>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(buscador: string) {
    this.hayError = false;
  }

}
