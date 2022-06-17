import { Component, OnInit } from '@angular/core';

import { PokedexService } from './../../shared/services/pokedex.service';

import { Pokemon } from './../../shared/models/pokemon/pokemon';
import { Habilidade } from './../../shared/models/habilidade/habilidade';
import { Categoria } from './../../shared/models/categoria/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private listaTodosPokemons: Array<Pokemon> = [];
  private listaCategorias: Array<Categoria> = [];
  private listaHabilidades: Array<Habilidade> = [];
  public listaPesquisaPokemons: Array<Pokemon> = [];
  public serviceErro: boolean = false;

  constructor(
    private pokedexService: PokedexService
  ) { }

  private getPokemons():void {
    this.pokedexService.getPokemons().subscribe(
      (retorno) => {
        this.listaTodosPokemons = retorno;
        this.listaPesquisaPokemons = this.listaTodosPokemons;
      },
      (_) => {
        this.serviceErro = true;
      }
    );
  }

  public getPokemonsBusca(valor: string):void {
    const valoresFiltrados = this.listaTodosPokemons.filter(
      (pokemon: Pokemon) => {
        return pokemon.nome.includes(valor.toLowerCase())
            || pokemon.nome.includes(valor.toUpperCase())
            || pokemon.nome.includes(valor[0].toUpperCase() + valor.substr(1));
      }
    );
    this.listaPesquisaPokemons = valoresFiltrados;
  }

  async getCategorias() {
    this.pokedexService.getCategorias().subscribe(
      (retorno) => {
        this.listaCategorias = retorno;
      },
      (_) => {
        this.serviceErro = true;
      }
    );
  }

  async getHabilidades() {
    this.pokedexService.getHabilidades().subscribe(
      (retorno) => {
        this.listaHabilidades = retorno;
      },
      (_) => {
        this.serviceErro = true;
      }
    );
  }

  ngOnInit() {
    this.getCategorias();
    this.getHabilidades();
    this.getPokemons();
  }

}
