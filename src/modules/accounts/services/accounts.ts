import {IAccount} from "../util/interfaces";

export class Accounts {
    // @todo: remove this mockup
    private accounts: IAccount[] = [{
        id: '029js3kd',
        label: 'Auto',
        amount: 3000,
        transitions: [{
            id: '0',
            title: 'Test',
            date: new Date(),
            amount: 1000,
            tags: ['test', 'test3', 'test6']
        }]
    }, {
        id: 'fj830kds',
        label: 'Casa',
        amount: 50000
    }, {
        id: 'jgh28s89',
        label: 'Alimentari',
        amount: 12500
    }]

    constructor(private $q, private $http, private API_URL) {}

    get(id?: string): ng.IPromise<IAccount[]|IAccount> {
        return this.$q(async function (resolve, reject) {
            try {
                let url = `${this.API_URL}/accounts`
                if (id) url += `/${id}`
                let res = await this.$http.get(url)
                
                resolve(res.data)
            }
            catch (err) {
                console.error(err)
                // reject(err)
                resolve(this.accounts.find(account => {return account.id === id}))
            }
        }.bind(this))
    }
}