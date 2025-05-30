import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TiendaComponent } from './Pages/tienda/tienda.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'store', component: TiendaComponent}
];
