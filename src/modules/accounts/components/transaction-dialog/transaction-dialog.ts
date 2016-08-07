import {ITransaction} from "../../util/interfaces";

export default class TransactionDialogComponent implements ng.IComponentOptions {
    public controller = TransactionDialogController
    public template = require('./transaction-dialog.html')
    public bindings:any = {
        transaction: '=?'
    }
}

class TransactionDialogController {
    public transaction:ITransaction

    constructor(private Accounts, private $mdDialog) {}

    cancel() {
        this.$mdDialog.cancel()
    }

    save() {
        // @todo: use Accounts to save the new account
    }
}