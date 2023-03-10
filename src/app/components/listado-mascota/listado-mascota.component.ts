import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from '../../interfaces/mascota';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const listMascotas: Mascota[] = [
  { nombre: 'Firulais', edad: 2, raza: 'Doverman', color:"oscuro", peso:12},
  { nombre: 'Caramelo', edad: 1, raza: 'Chihuahua', color:"blanco", peso:2},
  { nombre: 'Fursio', edad: 4, raza: 'Pastor Aleman', color:"gris", peso:23},
  { nombre: 'Califa', edad: 14, raza: 'Labrador', color:"negro", peso:13},
  { nombre: 'pedro', edad: 4, raza: 'Frenchpool', color:"blanco", peso:3},
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);  // <-- Data source according to the table

  //paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //filtro de ordenamiento
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _snackBar:MatSnackBar ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //cambiar el lenguage de la paginacion
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
  }

  //filtro de busqueda
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarMascota(){
    this._snackBar.open('La mascota fue eliminada con exito', 'Cerrar',{
      duration: 2000,
      horizontalPosition: 'right'
    })
  }

  ngOnInit(): void {
  }

}
