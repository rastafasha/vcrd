import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinamicoComponent } from './pages/dinamico/dinamico.component';
import { StaticoComponent } from './pages/statico/statico.component';

const routes: Routes = [

  {path:'statico', component: StaticoComponent, data:{tituloPage:'Statico '}},
  {path:'dinamico', component: DinamicoComponent, data:{tituloPage:'Statico '}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
