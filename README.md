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

## Prerequisites
* This generator expects your code to be under `src/app` and will output all
its content under `{current_dir}/src/app`.

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

## Run
#### `yo angular-nmi`
Provides usage instructions.

### Single-file generators


#### `yo angular-nmi:constant`
__Generates__: An AngularJS Constant.  
__Arguments__: The resource name to be generated, following a {module}.{resource}
style, e.g. app.admin.foo.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [constant.tpl.js](templates/constant.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:constant app --root` | src/app/app.constant.js | app | AppConstant |
| `yo angular-nmi:constant app.admin.system` | src/app/admin/system.constant.js | app.admin | SystemConstant |
| `yo angular-nmi:constant app.admin.storage-paths` | src/app/admin/storage-paths.constant.js | app.admin | StoragePathsConstant |
| `yo angular-nmi:constant app.admin.storage_paths` | src/app/admin/storage_paths.constant.js | app.admin | StoragePathsConstant |


#### `yo angular-nmi:controller`
__Generates__: An AngularJS Controller.  
__Arguments__: The resource name to be generated, following a {module}.{resource}
style, e.g. app.admin.foo.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [controller.tpl.js](templates/controller.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:controller app --root` | src/app/app.controller.js | app | AppController |
| `yo angular-nmi:controller app.admin.users` | src/app/admin/users.controller.js | app.admin | UsersController |
| `yo angular-nmi:controller app.admin.storage-paths` | src/app/storage-paths.controller.js | app | StoragePathsController |
| `yo angular-nmi:controller app.admin.storage_paths` | src/app/storage_paths.controller.js | app | StoragePathsController |


#### `yo angular-nmi:factory`
__Generates__: An AngularJS Factory.  
__Arguments__: The resource name to be generated, following a {module}.{resource}
style, e.g. app.admin.foo.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [factory.tpl.js](templates/factory.tpl.js)

##### Examples
| Generator | Generates file | Module's name | Resource's name |
| --------- | -------------- | ------------- | --------------- |
| `yo angular-nmi:factory app --root` | src/app/app.service.js | app | AppService |
| `yo angular-nmi:factory app.admin.contacts` | src/app/admin/contacts.service.js | app.admin | ContactsService |
| `yo angular-nmi:factory app.admin.storage-paths` | src/app/admin/storage-paths.service.js | app | StoragePathsService |
| `yo angular-nmi:factory app.admin.storage_paths` | src/app/admin/storage_paths.service.js | app | StoragePathsService |


#### `yo angular-nmi:module`
__Generates__: An AngularJS Module.  
__Arguments__: The name of the Module to create.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [module.tpl.js](templates/module.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:module app --root` | src/app/app.module.js | app |
| `yo angular-nmi:module app.admin` | src/app/admin/admin.module.js | app.admin |
| `yo angular-nmi:module app.admin.system` | src/app/admin/system/system.module.js | app.admin.system |
| `yo angular-nmi:module app.admin.large-accounts` | src/app/admin/large-accounts/large-accounts.module.js | app.admin.large-accounts |


#### `yo angular-nmi:route-ui`
__Generates__: An AngularJS Route configuration using [AngularUI Router](https://github.com/angular-ui/ui-router).  
__Arguments__: The resource name to be generated, following a {module}.{resource}
style, e.g. app.admin.foo.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [route-ui.tpl.js](templates/route-ui.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:route-ui app --root` | src/app/app.route.js | app |
| `yo angular-nmi:route-ui app.admin.admin` | src/app/admin/admin.route.js | app.admin |
| `yo angular-nmi:route-ui app.admin.restricted` | src/app/admin/restricted.route.js | app.admin |
| `yo angular-nmi:route-ui app.contacts.my-contacts` | src/app/contacts/my-contacts.route.js | app.contacts |


#### `yo angular-nmi:view`
__Generates__: An HTML view.  
__Arguments__: The resource name to be generated, following a {module}.{resource}
style, e.g. app.admin.foo.  
__Flags__: --root, creates a root-level resource (see examples).  
__Template__: [view.tpl.html](templates/view.tpl.html)

##### Examples
| Generator | Generates file |
| --------- | -------------- |
| `yo angular-nmi:view app --root` | src/app/app.html |
| `yo angular-nmi:view app.admin.index ` | src/app/admin/index.html |


### Group generators
#### `yo angular-nmi:feature`
__Generates__: A Module, a Constant, and a Route.  
__Flags__: --root, creates a root-level resource (see examples).  
__Arguments__: The name of the Module, Constant, and Route to generate.  
__Templates__: [module.tpl.js](templates/module.tpl.js), [constant.tpl.js](templates/constant.tpl.js), [route-ui.tpl.js](templates/route-ui.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:feature app --root` | src/app/app.module.js, src/app/app.constant.js, src/app/app.route.js | app |
| `yo angular-nmi:feature app.contacts` | src/app/contacts/contacts.module.js, src/app/contacts/contacts.constant.js, src/app/contacts/contacts.route.js | app.contacts |


#### `yo angular-nmi:vc`
__Generates__: A View and a Controller.  
__Arguments__: The name of the View and Controller to generate.  
__Flags__: --root, creates a root-level resource (see examples).  
__Templates__: [view.tpl.html](templates/view.tpl.html), [controller.tpl.js](templates/controller.tpl.js)

##### Examples
| Generator | Generates file | Module's name |
| --------- | -------------- | ------------- |
| `yo angular-nmi:vc app --root` | src/app/app.html, src/app/app.controller.js | app |
| `yo angular-nmi:vc app.contacts` | src/app/contacts/contacts.html, src/app/contacts/contacts.controller.js | app.contacts |
