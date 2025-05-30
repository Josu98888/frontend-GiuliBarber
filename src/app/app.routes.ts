import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TiendaComponent } from './Pages/tienda/tienda.component';
import { ServicesComponent } from './Pages/services/services.component';
import { AlisadosComponent } from './Pages/alisados/alisados.component';
import { TenidosComponent } from './Pages/tenidos/tenidos.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'store', component: TiendaComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'alisados', component: AlisadosComponent},
    {path: 'tenidos', component: TenidosComponent}
];
