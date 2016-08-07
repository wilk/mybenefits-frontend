import {IAccount} from "../../util/interfaces";

export default class AccountDialogComponent implements ng.IComponentOptions {
    public controller = AccountDialogController
    public template = require('./account-dialog.html')
    public bindings: any = {
        account: '=?'
    }
}

class AccountDialogController {
    public account:IAccount

    constructor(private Accounts, private $mdDialog) {}

    cancel() {
        this.$mdDialog.cancel()
    }

    save() {
        // @todo: use Accounts to save the new account
    }
}