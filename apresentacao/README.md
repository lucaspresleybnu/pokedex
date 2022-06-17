# Apresentacao

Este projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.19.

Utilizando os componentes do Material Design, o projeto desenvolvido inicialmente tem como objetivo exibir em uma lista os pokemons cadastrados assim como também a criação de novos.

O Projeto está dividido em Apresentacao (Front-End) e json-server (Api JSONServer)

Passos para execução do projeto:

-- API --

1° Ir na pasta do json-server

2° Caso não tenha instalado o json-server na máquina, aplicar o comando: 

`npm install -g json-server`

3° Para executar o serviço, aplicar o comando:

`json-server --watch db.json`    

-- Front-end --

1° Acessar o diretório apresentacao

2° Aplicar o comando: `ng serve --open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
