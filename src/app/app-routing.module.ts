import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotasComponent } from './components/ver-mascotas/ver-mascotas.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado-mascotas', pathMatch: 'full' },
  { path: 'listado-mascotas', component: ListadoMascotaComponent },
  { path: 'agregar-mascota', component: AgregarEditarMascotaComponent },
  { path: 'ver-mascota/:id', component: VerMascotasComponent },
  { path: 'editar-mascota/:id', component: AgregarEditarMascotaComponent },
  { path: '**', redirectTo: 'listado-mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
