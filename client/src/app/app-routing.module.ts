import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnaFormComponent } from './components/dna-form/dna-form.component'
import {NavigationComponent} from "./components/navigation/navigation.component"
import { DnaListComponent } from './components/dna-list/dna-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dnas/add',
    pathMatch: 'full'
  },
  {
    path: 'dnas/:string/:distance',
    component: DnaListComponent
  },
  {
    path: 'dnas/add',
    component: DnaFormComponent
  },
  {
    path: 'dnas/search/:string/:distance',
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
