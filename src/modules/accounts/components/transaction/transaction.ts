import './transaction.scss'

export default class TransactionComponent implements ng.IComponentOptions {
    public controller = TransactionController
    public template = require('./transaction.html')
    public bindings: any = {
        transaction: '='
    }
}

class TransactionController {}