
import {Routes, RouterModule} from '@angular/router';

// const ROUTES: Routes = [
//   {
//     path: 'about',
//     loadChildren: 'app/components/about/about.module#AboutModule'
//   },
//   {
//     path: 'home',
//     loadChildren: 'app/components/home/home.module#HomeModule'
//   }
// ];



const ROUTES: Routes = [];

export const globalRouting = RouterModule.forRoot(ROUTES);
