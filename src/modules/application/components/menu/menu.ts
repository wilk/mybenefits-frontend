import {IAccount} from "../../../accounts/util/interfaces";

import './menu.scss'

export default class MenuComponent implements ng.IComponentOptions {
    public controller = MenuController
    public template = require('./menu.html')
}

class MenuController {
    public accounts: IAccount[]

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