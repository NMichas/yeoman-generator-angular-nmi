[![Build Status](https://travis-ci.org/NMichas/yeoman-generator-angular-nmi.svg?branch=master)](https://travis-ci.org/NMichas/yeoman-generator-angular-nmi)
[![Dependency Status](https://gemnasium.com/NMichas/yeoman-generator-angular-nmi.svg)](https://gemnasium.com/NMichas/yeoman-generator-angular-nmi)
[![Coverage Status](https://coveralls.io/repos/github/NMichas/yeoman-generator-angular-nmi/badge.svg?branch=master)](https://coveralls.io/github/NMichas/yeoman-generator-angular-nmi?branch=master)  

## What this is (and isn't) about
* It does generate various AngularJS resources (controllers, factories, routes, etc.) in a
standard way, so that different developers of your project follow the
same style.
* It does *not* generate an AngularJS app scaffolding/structure for you. For this,
you may use the excellent [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).
* It does follow a very opinionated style, mainly based on [John Papa](https://github.com/johnpapa)'s excellent
[AngularJS styleguide](https://github.com/johnpapa/angular-styleguide). If you want
different templates to apply your own team's styling, fork and replace the templates
under `templates` folder.
* It does *not* perform any kind of validation of your structure, conformance check to
guidelines, linting, compression, merging, optimising, or anything of that sort.
* Inspired by [generator-ng-super](https://github.com/jshipster/generator-ng-super).

## Install

### Install Yeoman:
```
npm install -g yo
```

### Install generator:
```
npm install -g generator-angular-nmi
```

## Internationalisation
All command-line output as well as all comments within the generated files can be
customised by changing the lexicon file(s) under `app/locales`. The generator will
automatically calculate the language to use based on your OS' language settings.
In case a lexicon file is not available for your OS' locale, the default English
one will be used.
### Additional languages
Create a new JSON file under `app/locales` with the
[ISO 639 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of your
locale. If you wish to contribute locales for another language please
send a PR.
### What is my current locale/language?
Locale/language discovery takes place using the
[os-locale](https://github.com/sindresorhus/os-locale) library which practically
looks into the value defined by any of
`env.LC_ALL, env.LC_MESSAGES, env.LANG,env.LANGUAGE` (in that order).

## Testing and coverage report
`istanbul cover _mocha -- -R spec`

## Run
#### `yo angular-nmi`
Provides usage instructions.

### Single-file generators


#### `yo angular-nmi:constant`
__Generates__: An AngularJS Constant.  
__Arguments__: Output folder name, module name, constant name.    
__Template__: [constant.tpl.js](templates/constant.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:constant src/app module1 system` | src/app/system.constant.js | module1 | SystemConstant |


#### `yo angular-nmi:controller`
__Generates__: An AngularJS Controller.  
__Arguments__: Output folder name, module name, controller name.  
__Template__: [controller.tpl.js](templates/controller.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:controller src/app module1 system` | src/app/system.controller.js | module1 | SystemController |


#### `yo angular-nmi:factory`
__Generates__: An AngularJS Factory.  
__Arguments__: Output folder name, module name, factory/service name.    
__Template__: [factory.tpl.js](templates/factory.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:factory src/app module1 control` | src/app/control.service.js | app | ControlService |


#### `yo angular-nmi:module`
__Generates__: An AngularJS Module.  
__Arguments__: Output folder name, module name, module filename.  
__Template__: [module.tpl.js](templates/module.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:module src/app/foo app.foo.suppliers suppliers` | src/app/foo/suppliers.module.js | app.foo.suppliers |


#### `yo angular-nmi:route-ui`
__Generates__: An AngularJS Route configuration using [AngularUI Router](https://github.com/angular-ui/ui-router).  
__Arguments__: Output folder name, module name, routes name.  
__Template__: [route-ui.tpl.js](templates/route-ui.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:route-ui src/app module2 app` | src/app/app.route.js | module2 |


#### `yo angular-nmi:view`
__Generates__: An HTML view.  
__Arguments__: Output folder name, view name.      
__Template__: [view.tpl.html](templates/view.tpl.html)

##### Examples
| Generator | Generates file |
| --------- | -------------- |
| `yo angular-nmi:view src/app edit` | src/app/edit.html |


### Group generators
#### `yo angular-nmi:vc`
__Generates__: A View and a Controller.  
__Arguments__: Output folder name, module name, resources name.    
__Templates__: [view.tpl.html](templates/view.tpl.html), [controller.tpl.js](templates/controller.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:vc src/app app export` | src/app/export.html, src/app/export.controller.js | app |
