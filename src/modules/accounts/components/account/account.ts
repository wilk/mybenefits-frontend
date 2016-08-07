import {IAccount} from "../../util/interfaces";

import './account.scss'

export default class AccountComponent implements ng.IComponentOptions {
    public controller = AccountController
    public template = require('./account.html')
}

class AccountController {
    public account: IAccount

    constructor(private Accounts, private $stateParams, private $mdDialog) {}

    async $onInit()  {
        try {
            this.account = await this.Accounts.get(this.$stateParams.id)
        }
        catch (err) {
            console.error(err)
            this.account = null
        }
    }

    newTransaction(evt) {
        this.$mdDialog.show({
            template: `<mb-transaction-dialog></mb-transaction-dialog>`,
            parent: angular.element(document.body),
            targetEvent: evt,
            clickOutsideToClose: true
        })
    }
}