# Resources generator for AngularJS
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
* It does *not* perform any kind of validation of your structure, conformance to
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

## Prerequisites
This generator expects your code to be under `src/app` and you should run it under `src`,   
e.g. `~/myproject/src$yo angular-nmi`

## Run
#### `yo angular-nmi`
Provides usage instructions.

### Single-file generators

#### `yo angular-nmi:controller`
__Generates__: An AngularJS Controller.  
__Arguments__: The name of the Controller to create.    
__Template__: [controller.tpl.js](templates/controller.tpl.js)

*Examples*:

| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:controller app.contacts` | src/app/contacts.controller.js | app | ContactsController |
| `yo angular-nmi:controller app.admin.contacts` | src/app/admin/contacts.controller.js | app.admin | ContactsController |
| `yo angular-nmi:controller app.view-contacts` | src/app/view-contacts.controller.js | app | ViewContactsController |

#### `yo angular-nmi:constant`
__Generates__: An AngularJS Constant.  
__Arguments__: The name of the Constant to create.    
__Template__: [constant.tpl.js](templates/constant.tpl.js)

*Examples*:

| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:constant app.contacts` | src/app/contacts.constant.js | app | ContactsConstant |
| `yo angular-nmi:constant app.admin.contacts` | src/app/admin/contacts.constant.js | app.admin | ContactsConstant |
| `yo angular-nmi:constant app.view-contacts` | src/app/view-contacts.constant.js | app | ViewContactsConstant |

#### `yo angular-nmi:factory`
__Generates__: An AngularJS Factory.  
__Arguments__: The name of the Factory to create.    
__Template__: [factory.tpl.js](templates/factory.tpl.js)

*Examples*:

| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:factory app.contacts` | src/app/contacts.factory.js | app | ContactsFactory |
| `yo angular-nmi:factory app.admin.contacts` | src/app/admin/contacts.factory.js | app.admin | ContactsFactory |
| `yo angular-nmi:factory app.view-contacts` | src/app/view-contacts.factory.js | app | ViewContactsFactory |

#### `yo angular-nmi:module`
__Generates__: An AngularJS Module.  
__Arguments__: The name of the Module to create.    
__Template__: [module.tpl.js](templates/nodule.tpl.js)

*Examples*:

| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:module app.contacts` | src/app/contacts/contacts.module.js | app.contacts |
| `yo angular-nmi:module app.admin.contacts` | src/app/admin/contacts/contacts.module.js | app.admin.contacts |
| `yo angular-nmi:factory app.my-contacts` | src/app/my-contacts/my-contacts.module.js | app.my-contacts |

#### `yo angular-nmi:route`
__Generates__: An AngularJS Route configuration.  
__Arguments__: The name of the Route configuration to create.    
__Template__: [route.tpl.js](templates/route.tpl.js)

*Examples*:

| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:route app.contacts` | src/app/contacts.route.js | app |
| `yo angular-nmi:route app.admin.contacts` | src/app/admin/contacts.route.js | app.admin |
| `yo angular-nmi:route app.my-contacts` | src/app/my-contacts.route.js | app.my-contacts |

#### `yo angular-nmi:view`
__Generates__: An HTML view.  
__Arguments__: The name of the View to create.    
__Template__: [view.tpl.html](templates/view.tpl.html)

*Examples*:

| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:view app.contacts.list` | src/app/contacts/list.html | app.contacts |

### Group generators
#### `yo angular-nmi:feature`
__Generates__: A Module, a Constant, and a Route.  
__Arguments__: The name of the Module, Constant, and Route to create.    

*Examples*:

| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:feature app.contacts` | src/app/contacts.module.js, src/app/contacts.constant.js, src/app/contacts.route.js | app.contacts |

#### `yo angular-nmi:vc`
__Generates__: A View and a Controller.  
__Arguments__: The name of the View and Controller to create.    

*Examples*:

| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:vc app.contacts.show-all` | src/app/contacts/show-all.controller.js, src/app/contacts/show-all.html | app.contacts |
