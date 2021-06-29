import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  buscador: string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor(
    private paisService: PaisService) { }

  buscar(){
    this.hayError = false;
    console.log(this.buscador);
    this.paisService.buscarPais(this.buscador)
      .subscribe(paises =>{
        this.paises = paises;
      }, error =>{
        this.hayError = true;
        this.paises = [];
      });
  }

}
