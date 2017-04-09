import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ExternalComponent }           from './external.component';

const homeRoutes: Routes = [
  { path: '',  component: ExternalComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ExternalComponent
  ]
})
export class ExternalModule {}
