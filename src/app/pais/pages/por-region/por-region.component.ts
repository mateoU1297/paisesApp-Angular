import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises      : Country[] = [];

  constructor(
    private paisService: PaisService) {

    }

  getClaseCSS(region: string): string {
    return(region === this.regionActiva)? 'btn btn-primary mt-1' : 'btn btn-outline-primary mt-1';
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
      .subscribe( paises => this.paises = paises);
  }

}