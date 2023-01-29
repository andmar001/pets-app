import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Mascota[] = [
  { nombre: 'Firulais', edad: 2, raza: 'Doverman', color:"oscuro", peso:12},
  { nombre: 'Caramelo', edad: 1, raza: 'Chihuahua', color:"blanco", peso:2},
  { nombre: 'Fursio', edad: 4, raza: 'Pastor Aleman', color:"gris", peso:23},
  { nombre: 'Califa', edad: 14, raza: 'Labrador', color:"negro", peso:13},
  { nombre: 'Sarco', edad: 4, raza: 'Frenchpool', color:"blanco", peso:3},
];


@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
