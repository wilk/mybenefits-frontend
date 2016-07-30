import 'angular'
import 'angular-ui-router'

import '../constants'

import AccountComponent from "./components/account/account";
import TransitionComponent from "./components/transition/transition";
import {Accounts} from "./services/accounts";
import config from './config/config'

angular.module('mb.accounts', ['ui.router', 'mb.constants'])
    .component('mbAccount', new AccountComponent())
    .component('mbTransition', new TransitionComponent())
    .service('Accounts', Accounts)
    .config(config)