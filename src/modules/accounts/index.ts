import 'angular'
import 'angular-ui-router'

import '../constants'

import AccountComponent from "./components/account/account";
import TransactionComponent from "./components/transaction/transaction";
import {Accounts} from "./services/accounts";
import AccountDialogComponent from "./components/account-dialog/account-dialog";
import TransactionDialogComponent from "./components/transaction-dialog/transaction-dialog";
import config from './config/config'

angular.module('mb.accounts', ['ui.router', 'mb.constants'])
    .component('mbAccount', new AccountComponent())
    .component('mbTransaction', new TransactionComponent())
    .component('mbAccountDialog', new AccountDialogComponent())
    .component('mbTransactionDialog', new TransactionDialogComponent())
    .service('Accounts', Accounts)
    .config(config)