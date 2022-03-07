import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DnaFormComponent } from './components/dna-form/dna-form.component';
import { DnaListComponent } from './components/dna-list/dna-list.component';

import { DnasService } from './services/dnas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DnaFormComponent,
    DnaListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DnasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
