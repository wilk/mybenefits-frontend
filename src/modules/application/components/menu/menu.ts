import {IAccount} from "../../../accounts/util/interfaces";

export default class MenuComponent implements ng.IComponentOptions {
    public controller = MenuController
    public template = require('./menu.html')
}

class MenuController {
    public accounts: IAccount[]
    public toggledAccounts: boolean = false

    constructor(private Accounts) {}

    async $onInit() {
        try {
            this.accounts = await this.Accounts.get()
        }
        catch (err) {
            console.error(err)
        }
    }
    
    go(state: string) {
        
    }
}