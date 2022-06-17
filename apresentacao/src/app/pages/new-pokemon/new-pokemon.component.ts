import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PokedexService } from 'src/app/shared/services/pokedex.service';

import { Habilidade } from './../../shared/models/habilidade/habilidade';
import { Categoria } from './../../shared/models/categoria/categoria';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.scss']
})
export class NewPokemonComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  public listaCategorias: Array<Categoria> = [];
  public listaHabilidades: Array<Habilidade> = [];
  public cadastroForm!: FormGroup;

  constructor(
    private pokedexService: PokedexService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  inicializaForm() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      peso: [null, Validators.required],
      altura: [null, Validators.required],
      categoria: [null, Validators.required],
      habilidades: [null, Validators.required],
      descricao: [null, Validators.required],
      ataque: [1, []],
      defesa: [1, []],
      velocidade: [1, []],
      imagem: ["", []]
    });
  }

  getCategorias() {
    this.pokedexService.getCategorias().subscribe(
      (retorno) => {
        this.listaCategorias = retorno;
      },
      (_) => {}
    );
  }

  getHabilidades() {
    this.pokedexService.getHabilidades().subscribe(
      (retorno) => {
        this.listaHabilidades = retorno;
      },
      (_) => {}
    );
  }

  enviaForm() {
    if (this.cadastroForm.valid) {
      this.pokedexService.postPokemons(this.cadastroForm.value).subscribe(
        (retorno) => {
          alert("Pokemon cadastrado com sucesso!");
          this.router.navigate(['']);
        },
        (_) => {
          alert("Não foi possível cadastrar, verifique a conexão com o servidor");
        }
      );
    }
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getHabilidades();
    this.inicializaForm();
  }

}
