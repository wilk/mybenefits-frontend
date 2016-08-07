import "./navbar.scss"

export default class NavBarComponent implements ng.IComponentOptions {
    public controller = NavBarController
    public template = require('./navbar.html')
}

class NavBarController {
    public currentState = 'Accounts'

    constructor(private $mdDialog, private $stateParams, private Accounts, private $rootScope) {}

    async editAccount(evt) {
        try {
            let scope = this.$rootScope.$new()
            scope.account = await this.Accounts.get(this.$stateParams.id)
            this.$mdDialog.show({
                template: `<mb-account-dialog account="account"></mb-account-dialog>`,
                parent: angular.element(document.body),
                targetEvent: evt,
                clickOutsideToClose: true,
                scope: scope
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    async removeAccount(evt) {
        let account = await this.Accounts.get(this.$stateParams.id)
        let result = await this.$mdDialog.confirm({
            targetEvent: evt,
            title: 'Confirm',
            textContent: `Are you sure to remove ${account.label} account?`
        })

        if (result) {
            // @todo: remove account through Accounts service
        }
    }
}