import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../models/pokemon/pokemon';
import { Categoria } from './../models/categoria/categoria';
import { Habilidade } from './../models/habilidade/habilidade';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private urlServer = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.urlServer}/pokemons`);
  }

  postPokemons(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.urlServer}/pokemons`, pokemon);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlServer}/categorias`);
  }

  getHabilidades(): Observable<Habilidade[]> {
    return this.http.get<Habilidade[]>(`${this.urlServer}/habilidades`);
  }
}
