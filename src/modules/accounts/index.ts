import 'angular'
import 'angular-ui-router'

import '../constants'

import AccountComponent from "./components/account/account";
import TransactionComponent from "./components/transaction/transaction";
import {Accounts} from "./services/accounts";
import config from './config/config'

angular.module('mb.accounts', ['ui.router', 'mb.constants'])
    .component('mbAccount', new AccountComponent())
    .component('mbTransaction', new TransactionComponent())
    .service('Accounts', Accounts)
    .config(config)