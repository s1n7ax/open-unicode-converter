# OpenUnicodeConverter

I wanted to create a Unicode converter that is truly free, opensource and most importantly, Configurable. First I went through some of the applications I found on the internet. 

Their Disadvantages:
* None of these are FOSS (https://en.wikipedia.org/wiki/Free_and_open-source_software)
* None of these are configurable
* QSfox - This used to be the best Sinhala Unicode Converter back then but no longer works or available for download
* Real Time Unicode Converter - editing is hard because the converted text is in another text area. Unable to include some English characters in the Sinhala text.
* Helakuru - Not really a good online Unicode converter. No help page. No good use of space on the website. It's just for showcasing the capabilities.
* Google Input Tools - Awesome, but I prefer just typing what I want instead of selecting whatever the word google is suggesting to me. If you happened to write official documents, I highly recommend Input tool over anything, but I'm not that guy. 

So I came up with "Open Unicode Converter" solution, with a configurable and extensible (for other languages) FOSS implementation along with "Sinhala Unicode Converter" implementation and a simple web UI to showcase the capabilities.

Features:
* You are free to update or change anything (FOSS).
* If you just want to change a letter, you don't need any programming knowledge. 
* I have included Test Cases for every single conversion to Sinhala Unicode. 
* Well commented and Readable code
* Really good use of space
* Now you can have English and Sinhala in the same document and keyboard short cut to change the language.(Ctrl + Space)



*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4. Support Angular version 8.0.0*

## Install angular-cli
Make sure global binary path of npm or yarn is included in the `PATH` environment variable
```
// using npm
npm install -g @angular/cli

// using yarn
yarn global add @angular/cli
```

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
