import {IAccount} from "../../util/interfaces";

export default class AccountComponent implements ng.IComponentOptions {
    public controller = AccountController
    public template = require('./account.html')
}

class AccountController {
    public account: IAccount

    constructor(private Accounts, private $stateParams) {}

    async $onInit()  {
        try {
            this.account = await this.Accounts.get(this.$stateParams.id)
        }
        catch (err) {
            console.error(err)
            this.account = null
        }
    }
}