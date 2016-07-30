import 'angular'
import 'angular-ui-router'
import 'angular-material'
import 'angular-animate'
import 'angular-aria'
import 'jquery'

import './modules/application'
import './modules/accounts'

import 'angular-material/angular-material.css'

angular.module('mb', ['mb.application', 'mb.accounts', 'ngMaterial'])

angular.bootstrap(document, ['mb'])