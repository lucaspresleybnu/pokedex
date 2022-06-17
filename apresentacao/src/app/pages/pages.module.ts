import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewPokemonComponent
  ],
  exports: [
    HomeComponent,
    NewPokemonComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }