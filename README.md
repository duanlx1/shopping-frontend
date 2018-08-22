# Shopping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Pull override local
1. git fetch --all
2. git reset --hard origin/20180801_duanlx


##Build and deploy on github
First install the angular-cli-ghpages globally:
  $ npm install -g angular-cli-ghpages

Now use the Angular CLI with the --base-href flag to build your project and set the correct base href location:
  $ ng build --prod --base-href "https://duanlx1.github.io/Cosmetic-Shopping/"

Then it’s as simple as running angular-cli-ghpages. You can use the ngh shorthand:
  $ ngh --dir=dist/shopping

duanlx

